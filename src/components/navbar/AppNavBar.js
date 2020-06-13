import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { HOME_ROUTE, PROFILE_ROUTE } from '../../constants';
import { AppContext } from '../../contexts/AppContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'black',
  },
  userName: {
    color: 'orange',
    fontSize: 15,
    marginleft: 10,
    marginright: 10,
  },
}));

const AppNavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const onButtonClick = (path) => {
    history.push(path);
  };

  return (
    <AppContext.Consumer>
      {({ appState }) => (
        <div className={classes.root}>
          <AppBar position='static' className={classes.appBar}>
            <Toolbar>
              <Typography variant='h6' className={classes.title}>
                React Mini Project - Chat
              </Typography>
              <Typography variant='h6' className={classes.userName}>
                {appState.userName}
              </Typography>
              <Button color='inherit' onClick={() => onButtonClick(HOME_ROUTE)}>
                Home
              </Button>
              <Button
                color='inherit'
                onClick={() => onButtonClick(PROFILE_ROUTE)}
              >
                Profile
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default AppNavBar;
