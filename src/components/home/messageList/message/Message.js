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
  date: {
    marginLeft: 50,
    fontsize: 12,
    color: 'black',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    flexWrap: "wrap"
  },
}));

const Message = (props) => {
  const classes = useStyles();
  const { userName, text, date } = props.data;

  const getDateString = (date) => {
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const dateString = `${hour}:${minutes}`;
    return dateString;
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.name} color='secondary'>
        {userName}
      </Typography>
      <div className={classes.footer}>
        <Typography className={classes.text}>{text}</Typography>
        <div className={classes.date}>{getDateString(date)}</div>
      </div>
    </div>
  );
};

export default Message;
