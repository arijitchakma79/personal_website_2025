import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ACCENT_OPTIONS = [
  { id: 'coral', name: 'Coral', color: '#ff6b6b' },
  { id: 'green', name: 'Green', color: '#22c55e' },
  { id: 'violet', name: 'Violet', color: '#a78bfa' },
  { id: 'blue', name: 'Blue', color: '#3b82f6' },
  { id: 'amber', name: 'Amber', color: '#f59e0b' },
  { id: 'rose', name: 'Rose', color: '#f43f5e' },
  { id: 'cyan', name: 'Cyan', color: '#06b6d4' },
  { id: 'orange', name: 'Orange', color: '#f97316' },
  { id: 'indigo', name: 'Indigo', color: '#6366f1' },
  { id: 'emerald', name: 'Emerald', color: '#10b981' },
  { id: 'sky', name: 'Sky', color: '#0ea5e9' },
  { id: 'fuchsia', name: 'Fuchsia', color: '#d946ef' },
  { id: 'lime', name: 'Lime', color: '#84cc16' },
];

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const [accent, setAccent] = useState(() => {
    const savedAccent = localStorage.getItem('accent');
    return savedAccent && ACCENT_OPTIONS.some(o => o.id === savedAccent) ? savedAccent : 'coral';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('accent', accent);
  }, [accent]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

