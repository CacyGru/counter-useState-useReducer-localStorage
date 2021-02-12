import React, { useState } from 'react';
import './theme.css';

const ThemeState2 = () => {
  const [theme, setTheme] = useState(false);

  const ThemeToggle = () => {
    setTheme((theme) => !theme);
    localStorage.setItem('theme', theme);
  };

  const setLsTheme = () => {
    setTheme(localStorage.getItem('theme'));
  };

  return (
    <div>
      <h1>Theme2 Toggle Test</h1>
      <button onClick={ThemeToggle}>Theme Toggle</button>
      <button onClick={setLsTheme}>localStorage</button>
    </div>
  );
};

export default ThemeState2;
