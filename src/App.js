import React from 'react';
import CounterReducer from './CounterReducer';
import ThemeReducer from './ThemeReducer';
import ThemeState from './ThemeState';
import ThemeState2 from './ThemeState2';

const App = () => {
  return (
    <div>
      <CounterReducer />
      <ThemeReducer />
      <ThemeState />
      <ThemeState2 />
    </div>
  );
};

export default App;
