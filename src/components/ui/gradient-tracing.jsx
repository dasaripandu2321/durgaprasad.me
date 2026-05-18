import React from "react";
import { motion } from "framer-motion";

export const GradientTracing = ({
  width = 1440,
  height = 2,
  baseColor = "rgba(139,92,246,0.2)",
  gradientColors = ["#2EB9DF", "#a78bfa", "#9E00FF"],
  animationDuration = 2,
  strokeWidth = 2,
  path,
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const w = Number(width) || 1440;
  const h = Number(height) || 2;
  const defaultPath = `M0,${h / 2} L${w},${h / 2}`;
  const d = path || defaultPath;
  const gradientId = `pulse-${Math.random().toString(36).substr(2, 9)}`;
  const dur = `${animationDuration}s`;

  return (
    <div className="relative" style={{ width: w, height: h }}>
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base faint line */}
        <path
          d={d}
          stroke={baseColor}
          strokeOpacity="0.3"
          strokeWidth={strokeWidth}
        />
        {/* Animated gradient trace */}
        <path
          d={d}
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={isMobile ? w : 0}
            y2="0"
          >
            {!isMobile && (
              <>
                <animate
                  attributeName="x1"
                  from="0"
                  to={w * 2}
                  dur={dur}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="x2"
                  from="0"
                  to={w}
                  dur={dur}
                  repeatCount="indefinite"
                />
              </>
            )}
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

/* ── Full-width responsive wrapper ── */
export const SectionDivider = ({
  gradientColors = ["#2EB9DF", "#a78bfa", "#9E00FF"],
  animationDuration = 2.5,
  strokeWidth = 1.5,
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height: 2 }}>
      <GradientTracing
        width={1440}
        height={2}
        gradientColors={gradientColors}
        animationDuration={animationDuration}
        strokeWidth={strokeWidth}
        baseColor="rgba(139,92,246,0.15)"
      />
    </div>
  );
};
