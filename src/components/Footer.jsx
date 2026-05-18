import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`relative border-t py-10 overflow-hidden backdrop-blur-xl ${
      isDark
        ? 'border-white/5 bg-dark-950/90'
        : 'border-primary-500/10 bg-white/80'
    }`}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-24 orb-purple opacity-20"/>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{background:'linear-gradient(90deg,transparent,rgba(139,92,246,0.3),rgba(6,182,212,0.3),transparent)'}}/>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center mb-2">
              <span
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 900,
                  fontSize: '1.6rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0d7ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 6px rgba(167,139,250,0.4))',
                }}
              >
                DP
              </span>
            </a>
            <p className={`text-xs flex items-center gap-1 justify-center md:justify-start ${isDark ? 'text-gray-600' : 'text-[#9d90cc]'}`}>
              &copy; {new Date().getFullYear()} D Venkata Durga Prasad
              <span className="flex items-center gap-1">· Made with <Heart size={10} className="text-pink-500 fill-pink-500"/></span>
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              {href: SOCIAL_LINKS.github,   icon: Github,   label: 'GitHub'},
              {href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn'},
              {href: SOCIAL_LINKS.email,    icon: Mail,     label: 'Email'},
            ].map(({href, icon: Icon, label}, i) => (
              <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{scale: 1.15, y: -3}} whileTap={{scale: 0.95}}
                title={label}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:shadow-neon ${
                  isDark
                    ? 'glass-panel text-gray-400 hover:text-primary-400 border border-white/5 hover:border-primary-500/30'
                    : 'bg-white border border-primary-500/15 text-[#7c6faa] hover:text-primary-600 hover:border-primary-500/40 shadow-sm'
                }`}>
                <Icon size={15}/>
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            whileHover={{scale: 1.1, y: -3}} whileTap={{scale: 0.95}}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              isDark
                ? 'text-primary-400 border border-primary-500/30 bg-primary-500/10 hover:bg-primary-500/20 hover:shadow-neon'
                : 'text-primary-600 border border-primary-500/30 bg-primary-500/8 hover:bg-primary-500/15 shadow-sm'
            }`}
            aria-label="Back to top">
            <ArrowUp size={15}/>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
