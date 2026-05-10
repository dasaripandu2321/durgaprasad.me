import React, { memo, useMemo } from 'react';
import { useTheme, useThemeValue, useThemeClass } from '../context/ThemeContext';

// Theme-aware wrapper component for better performance
export const ThemeWrapper = memo(({ children, className = '', ...props }) => {
  const { isDark } = useTheme();

  const themeClass = useMemo(() => {
    return isDark ? 'theme-dark' : 'theme-light';
  }, [isDark]);

  return (
    <div className={`${themeClass} ${className}`} {...props}>
      {children}
    </div>
  );
});

ThemeWrapper.displayName = 'ThemeWrapper';

// Theme-aware text component
export const ThemeText = memo(({ children, className = '', darkClass = '', lightClass = '', ...props }) => {
  const themeClass = useThemeClass(darkClass, lightClass);

  return (
    <span className={`${themeClass} ${className}`} {...props}>
      {children}
    </span>
  );
});

ThemeText.displayName = 'ThemeText';

// Theme-aware background component
export const ThemeBackground = memo(({ children, className = '', variant = 'surface', ...props }) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'theme-bg-primary';
      case 'surface':
      default:
        return 'theme-bg-surface';
    }
  }, [variant]);

  return (
    <div className={`${variantClass} ${className}`} {...props}>
      {children}
    </div>
  );
});

ThemeBackground.displayName = 'ThemeBackground';

// Hook for conditional rendering based on theme
export const useThemeConditional = (darkComponent, lightComponent) => {
  const { isDark } = useTheme();
  return isDark ? darkComponent : lightComponent;
};

// Performance-optimized theme-aware card component
export const ThemeCard = memo(({
  children,
  className = '',
  glass = false,
  ...props
}) => {
  const cardClass = useMemo(() => {
    const baseClass = 'rounded-2xl p-6 transition-all duration-300';
    const glassClass = glass ? 'glass-panel' : 'theme-bg-surface theme-border-primary';
    return `${baseClass} ${glassClass} ${className}`;
  }, [className, glass]);

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
});

ThemeCard.displayName = 'ThemeCard';

// Theme-aware button component
export const ThemeButton = memo(({
  children,
  className = '',
  variant = 'default',
  ...props
}) => {
  const { isDark } = useTheme();

  const buttonClass = useMemo(() => {
    const baseClass = 'px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';

    let variantClass = '';
    switch (variant) {
      case 'primary':
        variantClass = isDark
          ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-neon'
          : 'bg-primary-600 hover:bg-primary-500 text-white shadow-neon-light';
        break;
      case 'secondary':
        variantClass = isDark
          ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          : 'bg-primary-50 hover:bg-primary-100 text-primary-700 border border-primary-200';
        break;
      case 'ghost':
        variantClass = isDark
          ? 'hover:bg-white/10 text-gray-300 hover:text-white'
          : 'hover:bg-primary-50 text-gray-600 hover:text-primary-700';
        break;
      default:
        variantClass = 'theme-bg-surface theme-border-primary theme-text-primary hover:opacity-80';
    }

    return `${baseClass} ${variantClass} ${className}`;
  }, [className, variant, isDark]);

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
});

ThemeButton.displayName = 'ThemeButton';