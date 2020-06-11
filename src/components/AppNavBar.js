import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { HOME_ROUTE, PROFILE_ROUTE } from '../constants';

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
}));

const AppNavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const onButtonClick = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
              React Mini Project - Chat
          </Typography>
          <Button color='inherit' onClick={() => onButtonClick(HOME_ROUTE)}>
            Home
          </Button>
          {/* <Link to={PROFILE_ROUTE}></Link> */}
          <Button
            color='inherit'
            onClick={() => onButtonClick(PROFILE_ROUTE)}
          >
            Profile
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNavBar;
