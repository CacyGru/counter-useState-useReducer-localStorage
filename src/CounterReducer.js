import React, { useReducer } from 'react';

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
  //get LocalStorage

  // Reducer
  // const initialState =
  //   ? { count: localStorage.getItem('state') }
  //   : { count: 0 };

  const [state, dispatch] = useReducer(reducer, {
    count: localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state'))
      : 0,
  });

  const minus = () => {
    dispatch({ type: 'minus' });

    localStorage.setItem('state', JSON.stringify(state.count));
  };

  const plus = () => {
    dispatch({ type: 'plus' });
    localStorage.setItem('state', JSON.stringify(state.count));
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
