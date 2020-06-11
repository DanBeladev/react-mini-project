import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { ThemeContext } from '../contexts/ThemeContext';
import Message from './Message';
// import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:10,
    width: 600,    
    maxHeight: 600,
    background: 'gray',
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
        // <Container className={classes.root} fixed maxWidth="sm">
        <div className={classes.root}>
          {appState.messages.map((msg) => (
            <Message key={msg.date} data={msg} />
          ))}
          {/* //    </Container> */}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default MessageList;
