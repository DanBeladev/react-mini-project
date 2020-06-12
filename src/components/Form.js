import React, { useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { TextField, Button, makeStyles } from '@material-ui/core';
import M from 'materialize-css/dist/js/materialize.min.js';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
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
    if (value.length > 140) {
      setDisable(true);
    } else if (isDisable) {
      setDisable(false);
    }
    setText(value);
  };

  const onSend = (addMsg, appState) => {
    if (!isDisable && text.length !== 0) {
      const newMessage = {
        userName: appState.userName,
        text: text,
        date: new Date(),
      };
      addMsg(newMessage);
      setText('');
    } else if (text.length === 0) {
      M.toast({ html: 'Unable to send blank messages' });
    }
  };

  return (
    <AppContext.Consumer>
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
    </AppContext.Consumer>
  );
}

export default Form;
