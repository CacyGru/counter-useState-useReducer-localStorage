import React from 'react';
import ThemeReducer from './ThemeReducer';
import ThemeState from './ThemeState';
import ThemeState2 from './ThemeState2';

const App = () => {
  return (
    <div>
      <ThemeReducer />
      <ThemeState />
      <ThemeState2 />
    </div>
  );
};

export default App;
