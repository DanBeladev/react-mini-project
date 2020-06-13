import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#dcf8c6',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 'fit-content',
    overflowWrap: 'anywhere',
  },
  text: {
    color: '#4a4a4a',
    font: 'inherit',
    fontSize: 'large',
  },
  name: {
    color: '#34b7f1',
    fontSize: 'inherit',
  },
}));

const Message = (props) => {
  const classes = useStyles();
  const { userName, text } = props.data;
  return (
    <div className={classes.container}>
      <Typography className={classes.name} color='secondary'>
        {userName}
      </Typography>
      <Typography className={classes.text}>{text}</Typography>
    </div>
  );
};

export default Message;
