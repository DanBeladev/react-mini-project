import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AppContext } from '../contexts/AppContext';
import Message from './Message';
import './MessageList.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    width: 1000,
    height: 500,
    background: '#ece5dd',
    overflow: 'scroll',
    overflowX: 'hidden',
    border: '4px solid black',
  },
}));

const MessageList = () => {
  const classes = useStyles();
  return (
    <AppContext.Consumer>
      {({ appState }) => (
        <div id='list-container' className={classes.root}>
          {appState.messages.map((msg, index) => (
            <Message key={index} data={msg} />
          ))}
          <div
            id='dummy'
          ></div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default MessageList;
