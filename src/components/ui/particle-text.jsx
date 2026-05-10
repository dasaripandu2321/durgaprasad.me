import { useEffect, useRef } from "react";

class Particle {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.closeEnoughTarget = 100;
    this.maxSpeed = 1.0;
    this.maxForce = 0.1;
    this.particleSize = 10;
    this.isKilled = false;
    this.startColor = { r: 0, g: 0, b: 0 };
    this.targetColor = { r: 0, g: 0, b: 0 };
    this.colorWeight = 0;
    this.colorBlendRate = 0.01;
  }

  move() {
    const distance = Math.sqrt(
      Math.pow(this.pos.x - this.target.x, 2) +
        Math.pow(this.pos.y - this.target.y, 2)
    );
    const proximityMult =
      distance < this.closeEnoughTarget
        ? distance / this.closeEnoughTarget
        : 1;

    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };
    const mag = Math.sqrt(
      towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y
    );
    if (mag > 0) {
      towardsTarget.x = (towardsTarget.x / mag) * this.maxSpeed * proximityMult;
      towardsTarget.y = (towardsTarget.y / mag) * this.maxSpeed * proximityMult;
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };
    const steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
    if (steerMag > 0) {
      steer.x = (steer.x / steerMag) * this.maxForce;
      steer.y = (steer.y / steerMag) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx, drawAsPoints) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }
    const r = Math.round(
      this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight
    );
    const g = Math.round(
      this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight
    );
    const b = Math.round(
      this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight
    );

    ctx.fillStyle = `rgb(${r},${g},${b})`;
    if (drawAsPoints) {
      ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
    } else {
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  kill(width, height) {
    if (!this.isKilled) {
      const randomPos = generateRandomPos(width / 2, height / 2, (width + height) / 2);
      this.target.x = randomPos.x;
      this.target.y = randomPos.y;
      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      };
      this.targetColor = { r: 0, g: 0, b: 0 };
      this.colorWeight = 0;
      this.isKilled = true;
    }
  }
}

function generateRandomPos(x, y, mag) {
  const rx = Math.random() * 1000;
  const ry = Math.random() * 300;
  const dir = { x: rx - x, y: ry - y };
  const m = Math.sqrt(dir.x * dir.x + dir.y * dir.y);
  if (m > 0) { dir.x = (dir.x / m) * mag; dir.y = (dir.y / m) * mag; }
  return { x: x + dir.x, y: y + dir.y };
}

// Palette: purple → cyan → pink cycling
const PALETTES = [
  { r: 167, g: 139, b: 250 },  // purple-400
  { r: 34,  g: 211, b: 238 },  // cyan-400
  { r: 244, g: 114, b: 182 },  // pink-400
  { r: 96,  g: 165, b: 250 },  // blue-400
  { r: 52,  g: 211, b: 153 },  // emerald-400
];

let paletteIndex = 0;
const nextColor = () => {
  const c = PALETTES[paletteIndex % PALETTES.length];
  paletteIndex++;
  return c;
};

export function ParticleTextEffect({ words = ["HELLO"], height = 120, fontSize = 80 }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const frameRef = useRef(0);
  const wordIdxRef = useRef(0);
  const pixelSteps = 8;
  const drawAsPoints = true;

  const loadWord = (word, canvas) => {
    const W = canvas.width;
    const H = canvas.height;

    const off = document.createElement("canvas");
    off.width = W;
    off.height = H;
    const octx = off.getContext("2d");
    octx.clearRect(0, 0, W, H);
    octx.fillStyle = "white";
    octx.font = `bold ${fontSize}px 'Space Grotesk', Arial`;
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    octx.fillText(word, W / 2, H / 2);

    const imageData = octx.getImageData(0, 0, W, H);
    const pixels = imageData.data;
    const newColor = nextColor();
    const particles = particlesRef.current;
    let pIdx = 0;

    const coords = [];
    for (let i = 0; i < pixels.length; i += pixelSteps * 4) coords.push(i);
    // shuffle
    for (let i = coords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [coords[i], coords[j]] = [coords[j], coords[i]];
    }

    for (const ci of coords) {
      if (pixels[ci + 3] > 0) {
        const x = (ci / 4) % W;
        const y = Math.floor(ci / 4 / W);
        let p;
        if (pIdx < particles.length) {
          p = particles[pIdx];
          p.isKilled = false;
          pIdx++;
        } else {
          p = new Particle();
          const rp = generateRandomPos(W / 2, H / 2, (W + H) / 2);
          p.pos.x = rp.x;
          p.pos.y = rp.y;
          p.maxSpeed = Math.random() * 6 + 4;
          p.maxForce = p.maxSpeed * 0.05;
          p.particleSize = Math.random() * 4 + 3;
          p.colorBlendRate = Math.random() * 0.03 + 0.005;
          particles.push(p);
        }
        p.startColor = {
          r: p.startColor.r + (p.targetColor.r - p.startColor.r) * p.colorWeight,
          g: p.startColor.g + (p.targetColor.g - p.startColor.g) * p.colorWeight,
          b: p.startColor.b + (p.targetColor.b - p.startColor.b) * p.colorWeight,
        };
        p.targetColor = newColor;
        p.colorWeight = 0;
        p.target.x = x;
        p.target.y = y;
      }
    }
    for (let i = pIdx; i < particles.length; i++) {
      particles[i].kill(W, H);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth || 800;
      canvas.height = height;
      loadWord(words[wordIdxRef.current], canvas);
    };
    resize();

    const animate = () => {
      const ctx = canvas.getContext("2d");
      // Keep the particle canvas transparent so it blends with the dark section background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.move();
        p.draw(ctx, drawAsPoints);
        if (p.isKilled && (p.pos.x < -50 || p.pos.x > canvas.width + 50 || p.pos.y < -50 || p.pos.y > canvas.height + 50)) {
          particles.splice(i, 1);
        }
      }

      frameRef.current++;
      if (frameRef.current % 220 === 0) {
        wordIdxRef.current = (wordIdxRef.current + 1) % words.length;
        loadWord(words[wordIdxRef.current], canvas);
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [words, height, fontSize]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{ width: "100%", height: `${height}px`, display: "block" }}
    />
  );
}
