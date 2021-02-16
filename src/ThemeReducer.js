import React, { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'THEMECHANGE':
      return { theme: state.theme === 'dark' ? 'light' : 'dark' };

    default:
      return state.theme;
  }
};

const ThemeReducer = () => {
  //get LocalStorage, if there is data, set it to the initialState,
  //if there is no Data set initialState to 0

  // Reducer
  const initialState = {
    theme: localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'dark',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // useEffekt runs on every state update  => [state]
  useEffect(() => {
    localStorage.setItem('theme', /* JSON.stringify */ state.theme);
  }, [state.theme]);

  const themeChange = () => {
    dispatch({ type: 'THEMECHANGE' });
  };

  return (
    <div className={state.theme}>
      <h1>Theme Reducer Test</h1>

      {state.theme}
      <button onClick={themeChange}>ToggleTheme</button>
    </div>
  );
};

export default ThemeReducer;
