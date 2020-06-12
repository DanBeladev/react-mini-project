import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ThemeContext } from '../contexts/ThemeContext';
import Message from './Message';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:10,
    width: 600,    
    maxHeight: 600,
    background: '#ece5dd',
    overflow:'scroll',
    overflowX: 'hidden',
    border: '4px solid black',
  },
}));

const MessageList = () => {
  const classes = useStyles();

  return (
    <ThemeContext.Consumer>
      {({ appState }) => (
        <div className={classes.root}>
          {appState.messages.map((msg,index) => (
            <Message key={index} data={msg} />
          ))}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default MessageList;
