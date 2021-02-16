import React, { useState, useEffect } from 'react';
import './theme.css';

const ThemeState = () => {
  const [themeState, setTheme] = useState(
    localStorage.getItem('themeState')
      ? localStorage.getItem('themeState')
      : 'dark'
  );

  const ThemeToggle = () => {
    setTheme(themeState === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    localStorage.setItem('themeState', themeState);
  }, [themeState]);

  return (
    <div className={themeState}>
      <h1>Theme Toggle Test</h1>
      <button onClick={ThemeToggle}>Theme Toggle</button>

      {themeState}
    </div>
  );
};

export default ThemeState;
