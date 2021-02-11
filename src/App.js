import React from 'react';
import CounterReducer from './CounterReducer';
import CounterState from './CounterState';

const App = () => {
  return (
    <div>
      <CounterReducer />
      <CounterState />
    </div>
  );
};

export default App;
