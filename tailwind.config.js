/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#020208',
          900: '#07070f',
          800: '#0d0d1a',
          700: '#141428',
        },
        light: {
          50:  '#f8f7ff',
          100: '#f0eeff',
          200: '#e4e0ff',
          300: '#d4ceff',
        },
        glass: {
          100: 'rgba(255,255,255,0.03)',
          200: 'rgba(255,255,255,0.08)',
          300: 'rgba(255,255,255,0.12)',
        },
        primary: {
          600: '#7c3aed',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
          200: '#ddd6fe',
        },
        accent: {
          500: '#14b8a6',
          400: '#2dd4bf',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.3) 0%, transparent 60%)',
        'hero-gradient-light': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.15) 0%, transparent 60%)',
      },
      boxShadow: {
        'glass':     '0 8px 32px rgba(0,0,0,0.4)',
        'glass-light':'0 8px 32px rgba(124,58,237,0.08)',
        'neon':      '0 0 20px rgba(139,92,246,0.6), 0 0 40px rgba(139,92,246,0.3)',
        'neon-light':'0 0 16px rgba(139,92,246,0.25)',
        'neon-cyan': '0 0 20px rgba(6,182,212,0.6), 0 0 40px rgba(6,182,212,0.3)',
        'card':      '0 25px 50px rgba(0,0,0,0.5)',
        'card-light':'0 8px 40px rgba(124,58,237,0.1)',
      },
      backdropBlur: { glass: '20px' },
    },
  },
  plugins: [
    // Theme-aware utilities plugin
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.theme-bg-surface': {
          backgroundColor: 'var(--theme-surface)',
          transition: 'background-color 0.3s ease',
        },
        '.theme-bg-primary': {
          backgroundColor: 'var(--theme-bg)',
          transition: 'background-color 0.3s ease',
        },
        '.theme-text-primary': {
          color: 'var(--theme-text)',
          transition: 'color 0.3s ease',
        },
        '.theme-border-primary': {
          borderColor: 'var(--theme-border)',
          transition: 'border-color 0.3s ease',
        },
        '.theme-glass-bg': {
          backgroundColor: 'var(--theme-glass-bg)',
          transition: 'background-color 0.3s ease',
        },
        '.theme-glass-border': {
          borderColor: 'var(--theme-glass-border)',
          transition: 'border-color 0.3s ease',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}
