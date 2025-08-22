"use client";

import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="focus-ring rounded-full px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800">
      {theme === 'light' ? '🌞 Light' : '🌚 Dark'}
    </button>
  );
};
