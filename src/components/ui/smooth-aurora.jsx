import React from 'react';
import { motion } from 'framer-motion';

export const SmoothAurora = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Heavy Blur Container to blend the colors smoothly */}
      <div className="absolute inset-0 z-0" style={{ filter: 'blur(100px)' }}>
        {/* Animated Fluid Orbs */}
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{
            x: ['0%', '15%', '-15%', '0%'],
            y: ['0%', '-15%', '15%', '0%'],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-purple-600/40 rounded-full mix-blend-screen"
        />
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{
            x: ['0%', '-20%', '15%', '0%'],
            y: ['0%', '20%', '-15%', '0%'],
            scale: [1, 1.4, 0.8, 1],
            rotate: [360, 180, 90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] right-[0%] w-[55vw] h-[55vw] bg-cyan-500/30 rounded-full mix-blend-screen"
        />
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{
            x: ['0%', '25%', '-10%', '0%'],
            y: ['0%', '20%', '10%', '0%'],
            scale: [1, 0.9, 1.3, 1],
            rotate: [0, -90, -180, -360]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-[20%] left-[10%] w-[65vw] h-[65vw] bg-pink-500/30 rounded-full mix-blend-screen"
        />
        <motion.div
          style={{ willChange: 'transform' }}
          animate={{
            x: ['0%', '-15%', '25%', '0%'],
            y: ['0%', '-10%', '20%', '0%'],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 180, 360, 0]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-blue-600/30 rounded-full mix-blend-screen"
        />
      </div>

      {/* Subtle Fine Grain Noise Overlay for that HD cinematic texture */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px'
        }} 
      />
    </div>
  );
};
