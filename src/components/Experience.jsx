import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';
import { useTheme } from '../context/ThemeContext';
import RadialOrbitalTimeline from './RadialOrbitalTimeline';
import { FloatingPaths } from './ui/floating-paths';

/* ── Main section ── */
const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-dark-900/60' : 'bg-white/70'}`} />
      <div className="orb-cyan absolute w-[500px] h-[500px] -bottom-32 -left-32 opacity-20
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />" />
      <div className="orb-purple absolute w-[400px] h-[400px] top-0 right-0 opacity-15" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border ${
              isDark
                ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5'
                : 'border-cyan-600/30 text-cyan-700 bg-cyan-500/8'
            }`}
          >
            My Journey
          </motion.span>
          <h2 className={`text-4xl md:text-5xl font-space font-bold mb-4 ${isDark ? '' : 'text-[#1a1040]'}`}>
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="h-px w-32 mx-auto" style={{ background: 'linear-gradient(90deg,transparent,#06b6d4,transparent)' }} />
          <div className="mt-6 flex justify-center">
            <a
              href="#about"
              className={`inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold transition ${isDark ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/15' : 'border-cyan-600/30 bg-cyan-500/8 text-cyan-700 hover:bg-cyan-500/15'}`}
            >
              About Me
            </a>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 text-center"
          id="about"
        >
          <p className={`text-sm uppercase tracking-[0.28em] mb-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>About Me</p>
          <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            A data-driven developer with a passion for AI and modern web apps.
          </h3>
          <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            I am D Venkata Durga Prasad, a B.Tech CSE (Data Science) student who blends machine learning, analytics, and full-stack development to build useful projects and solve real problems.
          </p>
          <p className={`leading-relaxed mt-4 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            My experience includes a Data Science internship at Corizo, Google Advanced Data Analytics certification, and several projects in predictive modeling, dashboards, and intelligent web interfaces.
          </p>
        </motion.div>

        {/* Radial Orbital Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <RadialOrbitalTimeline timelineData={TIMELINE_DATA} />
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
