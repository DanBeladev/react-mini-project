import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button, TextField } from '@material-ui/core';
import { AppContext } from '../../contexts/AppContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Profile.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
    height: 360,
    background: 'aliceblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState('');

  const onTyping = (event) => {
    const { value } = event.target;
    setUserName(value);
  };

  const onButtonClicked = (changeUserName) => {
    if (userName !== '') {
      changeUserName(userName);
      setUserName('');
      M.toast({ html: 'User name changed successfully' });
    } else {
      M.toast({ html: 'User name must be non-empty' });
    }
  };

  return (
    <AppContext.Consumer>
      {({ appState, changeUserName }) => (
        <Card id='container' className={classes.root}>
          <CardHeader
            color='orange'
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
    </AppContext.Consumer>
  );
};

export default Profile;
