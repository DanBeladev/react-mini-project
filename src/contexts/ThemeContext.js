import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [appState, setAppState] = useState({
    messages: [],
    userName: 'Eli Copter',
  });

  // Functions
  const addMsg = (msg) => {
    setAppState({
      ...appState,
      messages: [...appState.messages, msg],
    });
  };
  const changeUserName = (name) => {
    setAppState({
      ...appState,
      userName: name,
    });
  };

  return (
    <ThemeContext.Provider value={{ appState, addMsg, changeUserName }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
