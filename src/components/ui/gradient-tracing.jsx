import React from "react";
import { motion } from "framer-motion";

export const GradientTracing = ({
  width,
  height,
  baseColor = "rgba(139,92,246,0.2)",
  gradientColors = ["#2EB9DF", "#a78bfa", "#9E00FF"],
  animationDuration = 2,
  strokeWidth = 2,
  path,
}) => {
  const defaultPath = `M0,${height / 2} L${width},${height / 2}`;
  const d = path || defaultPath;
  const gradientId = `pulse-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="relative" style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
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
          <motion.linearGradient
            animate={{
              x1: [0, width * 2],
              x2: [0, width],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            id={gradientId}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </motion.linearGradient>
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
