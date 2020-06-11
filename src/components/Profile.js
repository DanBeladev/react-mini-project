import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button, TextField } from '@material-ui/core';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    background: 'aliceblue',
    maxHeight: 350,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'space-around',
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState('');

  const onTyping = (event) => {
    const { value } = event.target;
    console.log(value);
    setUserName(value);
  };

  const onButtonClicked = (changeUserName) => {
    if (userName !== '') {
      changeUserName(userName);
      setUserName('');
    } else {
      console.log('empty string');
    }
  };

  return (
    <ThemeContext.Consumer>
      {({ appState, changeUserName }) => (
        <Card className={classes.root}>
          <CardHeader
            title={`${appState.userName} Profile`}
            subheader='Edit profile name here'
          />
          <CardContent>
            <TextField
              id='outlined-basic'
              label='User Name'
              variant='outlined'
              value={userName}
              onChange={onTyping}
            />
          </CardContent>
          <CardActions disableSpacing>
            <Button
              variant='contained'
              color='primary'
              onClick={() => onButtonClicked(changeUserName)}
            >
              Change Now
            </Button>
          </CardActions>
        </Card>
      )}
    </ThemeContext.Consumer>
  );
};

export default Profile;
