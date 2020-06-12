import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
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
    <AppContext.Provider value={{ appState, addMsg, changeUserName }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
