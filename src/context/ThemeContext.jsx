import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  systemTheme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
  isDark: true,
  isLight: false,
  isSystem: false
});

const THEME_STORAGE_KEY = 'portfolio-theme';
const SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)';

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('dark');

  const systemTheme = 'dark';
  const effectiveTheme = 'dark';
  const isDark = true;
  const isLight = false;
  const isSystem = false;

  // Apply dark theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light', 'theme-dark', 'theme-light');
    root.classList.add('theme-dark', 'dark');
    root.style.setProperty('--theme-bg', '#0a1628');
    root.style.setProperty('--theme-text', '#ffffff');
    root.style.setProperty('--theme-surface', 'rgba(255,255,255,0.05)');
    root.style.setProperty('--theme-border', 'rgba(255,255,255,0.1)');
  }, []);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const contextValue = useMemo(() => ({
    theme,
    systemTheme,
    effectiveTheme,
    toggleTheme,
    setTheme,
    isDark,
    isLight,
    isSystem
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Hook for theme-aware values
export const useThemeValue = (darkValue, lightValue) => {
  const { isDark } = useTheme();
  return isDark ? darkValue : lightValue;
};

// Hook for theme-aware classes
export const useThemeClass = (darkClass, lightClass) => {
  const { isDark } = useTheme();
  return isDark ? darkClass : lightClass;
};
