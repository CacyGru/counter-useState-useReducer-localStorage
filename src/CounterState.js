import React, { useState } from 'react';

const CounterState = () => {
  const [countState, setCountState] = useState(
    localStorage.getItem('countstate')
      ? JSON.parse(localStorage.getItem('countstate'))
      : 0
  );

  const plus = () => {
    localStorage.setItem('countstate', countState);
    setCountState((prevCountState) => prevCountState + 1);
  };
  const minus = () => {
    localStorage.setItem('countstate', countState);
    setCountState((prevCountState) => prevCountState - 1);
  };

  return (
    <div>
      <h1>Counter State Test</h1>
      <button onClick={minus}>-</button>
      {countState}
      <button onClick={plus}>+</button>
    </div>
  );
};

export default CounterState;
