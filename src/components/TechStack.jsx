import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SKILLS } from '../constants';
import { GlowCard } from './ui/spotlight-card';
import { ParticleTextEffect } from './ui/particle-text';
import { useTheme } from '../context/ThemeContext';

const icons = {
  Languages:   '⌨️',
  Frontend:    '🎨',
  'Backend & DB': '🗄️',
  'AI & Data Science': '🤖',
  'Tools & Deployment': '🚀',
};

const Card3D = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  if (isMobile) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className={`relative group ${className}`}
    >
      {/* Dynamic glow spot */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(139,92,246,0.15) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

const TechStack = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>What I work with</p>
          <div className="w-full max-w-2xl mx-auto mb-2">
            <ParticleTextEffect
              words={["LANGUAGES", "FRONTEND", "BACKEND", "AI & DATA", "TOOLS"]}
              height={100}
              fontSize={72}
            />
          </div>
          <h2 className={`text-2xl md:text-3xl font-space font-bold mb-4 ${isDark ? '' : 'text-[#1a1040]'}`}>
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlowCard glowColor="purple" className="h-full p-0">
                <Card3D>
                  <div className="holo-card rounded-2xl p-6 h-full depth-shadow scanline">
                    {/* Card header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600/30 to-cyan-600/30 border border-primary-500/20 flex items-center justify-center text-xl">
                        {icons[skillGroup.category] || '💡'}
                      </div>
                      <h3 className={`card-title text-lg font-bold font-space ${isDark ? 'text-white' : 'text-slate-900'}`}>{skillGroup.category}</h3>
                    </div>

                    {/* Skill bar */}
                    <div className="h-px w-full bg-gradient-to-r from-primary-500/50 to-transparent mb-5" />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`skill-tag px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-default ${isDark ? 'border border-gray-700/50 text-gray-300 bg-dark-800/50 hover:border-primary-500/60 hover:text-primary-300 hover:bg-primary-500/10' : 'border border-slate-200 text-slate-700 bg-slate-100 hover:border-primary-500/60 hover:text-primary-700 hover:bg-primary-50'}`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
