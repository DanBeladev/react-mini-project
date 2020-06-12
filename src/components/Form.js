import React, { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {},
  btn: {
    width: '100%',
    marginTop: 10,
    background: 'green',
    fontWeight: 'bold',
    border: '2px solid',
  },
  text: {
    width: '100%',
  },
}));

function Form() {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [isDisable, setDisable] = useState(false);

  // Event
  const onTyping = (event) => {
    const { value } = event.target;
    if(value.length > 140){
      setDisable(true)
    }
    else if(isDisable){
      setDisable(false)
    }
    setText(value)
  };

  const onSend = (addMsg, appState) => {
    if(!isDisable){
      const newMessage = {
        userName: appState.userName,
        text: text,
        date: new Date(),
      };
      addMsg(newMessage);
      setText('');
    }
  };

  return (
    <ThemeContext.Consumer>
      {({ appState, addMsg }) => {
        return (
          <div className={classes.container}>
            <TextField
              className={classes.text}
              onChange={onTyping}
              value={text}
              id='outlined-multiline-static'
              label='Type Here'
              multiline
              rows={4}
              variant='outlined'
            />
            <Button
              className={classes.btn}
              onClick={() => onSend(addMsg, appState)}
              disabled={isDisable}
            >
              Send
            </Button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Form;
