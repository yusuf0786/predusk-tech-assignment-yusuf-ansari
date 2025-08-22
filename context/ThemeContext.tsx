"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
type Theme = 'light'|'dark';
const Ctx = createContext<{ theme: Theme; toggle: () => void } | null>(null);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const s = typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme | null) : null;
    if (s) setTheme(s);
  }, []);
  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.classList.toggle('dark', theme === 'dark');
    if (typeof window !== 'undefined') localStorage.setItem('theme', theme);
  }, [theme]);
  const value = useMemo(() => ({ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }), [theme]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
