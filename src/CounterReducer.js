import React, { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'plus':
      return { count: state.count + 1 };
    case 'minus':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  //get LocalStorage, if there is data, set it to the initialState,
  //if there is no Data set initialState to 0

  // Reducer
  const initialState = {
    count: localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state'))
      : 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // useEffekt runs on every state update  => [state]
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state.count));
  }, [state]);

  const minus = () => {
    dispatch({ type: 'minus' });
  };

  const plus = () => {
    dispatch({ type: 'plus' });
  };

  return (
    <div>
      <h1>Counter Reducer Test</h1>
      <button onClick={minus}>-</button>
      {state.count}
      <button onClick={plus}>+</button>
    </div>
  );
};

export default CounterReducer;
