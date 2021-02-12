import React, { useState, useEffect } from 'react';
import './theme.css';

const ThemeState = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

  const ThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={theme}>
      <h1>Theme Toggle Test</h1>
      <button onClick={ThemeToggle}>Theme Toggle</button>

      {theme}
    </div>
  );
};

export default ThemeState;
