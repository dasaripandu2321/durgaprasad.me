import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT, RESUME_URL } from '../constants';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { LiquidButton } from './ui/liquid-glass-button';
import { useTheme } from '../context/ThemeContext';
import { WebGLShader } from './ui/webgl-shader';
import { SectionDivider } from './ui/gradient-tracing';

/* ── Background orbs + grid ── */
const Background = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
  </div>
);

/* ── Holographic intro card ── */
const HolographicCard = ({ children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    card.style.setProperty('--x', '50%');
    card.style.setProperty('--y', '50%');
    card.style.setProperty('--bg-x', '50%');
    card.style.setProperty('--bg-y', '50%');
  };

  return (
    <div
      ref={cardRef}
      className="holographic-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="holo-scanline" />
      <div className="holo-glow" />
      <div className="holo-content">{children}</div>
    </div>
  );
};
function useTypewriter(words, speed = 100, deleteSpeed = 60, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex(i => i + 1);
        }
      }
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return text;
}

const Hero = () => {
  const typed = useTypewriter(['Data Science', 'Machine Learning', 'Full-Stack Dev', 'AI & ML']);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* WebGL chromatic aberration shader — bottom layer */}
      <div className="absolute inset-0 z-0" style={{ opacity: isDark ? 0.6 : 0.25 }}>
        <WebGLShader />
      </div>

      {/* Overlay so content stays readable */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: isDark
          ? 'linear-gradient(to bottom, rgba(2,2,8,0.5) 0%, rgba(2,2,8,0.35) 50%, rgba(2,2,8,0.65) 100%)'
          : 'linear-gradient(to bottom, rgba(248,247,255,0.65) 0%, rgba(248,247,255,0.5) 50%, rgba(248,247,255,0.75) 100%)'
        }}
      />

      <Background />

      <div className="relative z-40 text-center px-6 max-w-4xl mx-auto w-full">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border glass-panel border-white/10 bg-slate-900/70 shadow-[0_0_30px_rgba(165,235,255,0.08)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
          <span className="text-sm font-medium text-slate-200">
            Available for opportunities
          </span>
        </motion.div>

        {/* ── Holographic intro card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-10"
        >
          <HolographicCard>
            <div className="px-8 py-10 md:px-12 md:py-12">

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/70 to-transparent" />

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-primary-500/60 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-cyan-500/60 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-cyan-500/60 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-primary-500/60 rounded-br-lg" />

              {/* Name */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold tracking-tight leading-tight mb-4 hero-title text-white">
                <span className="gradient-text">{HERO_CONTENT.title}</span>
              </h1>

              {/* Divider */}
              <div className="h-px w-24 bg-gradient-to-r from-white/30 via-cyan-300/30 to-white/30 mx-auto mb-5 rounded-full" />

              {/* Typewriter role */}
              <div className="text-lg md:text-2xl font-space font-medium mb-6 flex items-center justify-center gap-2 flex-wrap">
                <span className="text-slate-300">Passionate about</span>
                <span className="min-w-[160px] text-left inline-block text-cyan-200">
                  {typed}<span className="animate-pulse text-white/70">|</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-slate-300">
                {HERO_CONTENT.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <LiquidButton
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </LiquidButton>

                <LiquidButton
                  variant="cyan"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    const a = document.createElement('a');
                    a.href = RESUME_URL;
                    a.download = 'D_Venkata_Durga_Prasad_Resume.pdf';
                    a.click();
                  }}
                >
                  <Download size={16} />
                  Download Resume
                </LiquidButton>

                <LiquidButton
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </LiquidButton>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-6">
                {[
                  { href: 'https://github.com/dasaripandu2321', icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/dasari-venkata-durga-prasad-694ba7289', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:dasaripandu1979@gmail.com', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 transition-all duration-300 hover:text-cyan-200 text-slate-400"
                  >
                    <span className="w-10 h-10 rounded-full flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(96,165,250,0.18)] transition-all glass-panel bg-slate-900/70 border border-white/10">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm hidden sm:block">{label}</span>
                  </a>
                ))}
              </div>

            </div>
          </HolographicCard>
        </motion.div>

      </div>

      {/* Gradient trace at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
        <SectionDivider gradientColors={["#a78bfa","#06b6d4","#f472b6"]} animationDuration={1.8} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase text-slate-400">Scroll</span>
        <ChevronDown size={20} className="text-slate-300" />
      </motion.div>
    </section>
  );
};

export default Hero;
