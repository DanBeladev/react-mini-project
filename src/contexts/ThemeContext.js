import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
//   const [isLightTheme, setLightTheme] = useState(true);
//   const [light, setLight] = useState({
//     syntax: '#555',
//     ui: '#ddd',
//     bg: '#eee',
//   });
  //const [dark, setDark] = useState({ syntax: '#ddd', ui: '#333', bg: '#555' });
  const [appState, setAppState] = useState({
      messages: [],
    userName: 'Eli Copter'
  })

  // Functions
  const addMsg = (msg) => {
      setAppState({
          ...appState,
          messages: [...appState.messages, msg]
      })
  }

  return (
  <ThemeContext.Provider value={{appState, addMsg}}>
      {props.children}
  </ThemeContext.Provider>);
}

export default ThemeContextProvider;
