import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_LINKS.map(l => document.getElementById(l.id));
      const current = sections.findIndex(s => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current !== -1) setActive(NAV_LINKS[current].id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="fixed w-full z-50 flex justify-center pt-4 px-4"
    >
      {/* Floating pill navbar */}
      <div className={`w-full max-w-3xl transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl theme-bg-surface theme-border-primary shadow-[0_8px_40px_var(--theme-shadow)] rounded-2xl'
          : 'backdrop-blur-md theme-bg-surface theme-border-primary rounded-2xl'
      }`}>
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="#home" className="relative group flex items-center">
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                fontSize: '1.9rem',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                background: 'linear-gradient(135deg, #ffffff 0%, #e0d7ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 8px rgba(167,139,250,0.5))',
              }}
            >
              DP
            </span>
          </a>

          {/* Desktop links — centered */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                  active === link.id
                    ? 'text-white'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-[#4a3d80] hover:text-[#1a1040]'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600/70 to-cyan-600/70"
                    style={{ boxShadow: '0 0 12px rgba(139,92,246,0.4)' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.title}</span>
              </a>
            ))}
          </div>

          {/* Spacer to keep logo left-aligned */}
          <div className="hidden md:block w-8" />

          {/* Mobile toggle only */}
          <div className="md:hidden flex items-center">
            <button
              className={`w-8 h-8 rounded-lg glass-panel flex items-center justify-center ${isDark ? 'text-white' : 'text-[#1a1040]'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen
                  ? <motion.div key="x" initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}}  transition={{duration:0.15}}><X    size={16}/></motion.div>
                  : <motion.div key="m" initial={{rotate:90,opacity:0}}  animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:0.15}}><Menu size={16}/></motion.div>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-white/5"
            >
              <div className="flex flex-col p-3 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => { setIsOpen(false); setActive(link.id); }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      active === link.id
                        ? 'bg-primary-600/20 text-primary-300 border border-primary-500/30'
                        : isDark
                          ? 'text-gray-400 hover:text-white hover:bg-white/5'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
