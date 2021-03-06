import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import AppNavBar from './components/navbar/AppNavBar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import { ROOT_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from './constants';
import AppContextProvider from './contexts/AppContext';

const useStyles = makeStyles((theme) => ({
  appContent: {
    padding: 30,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

function App() {
  const classes = useStyles();
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <AppContextProvider>
        <BrowserRouter>
          <AppNavBar />
          <Box className={classes.appContent}>
            <Switch>
              <Route exact path={ROOT_ROUTE}>
                <Redirect to={HOME_ROUTE} />
              </Route>
              <Route exact path={HOME_ROUTE}>
                <Home />
              </Route>
              <Route exact path={PROFILE_ROUTE}>
                <Profile />
              </Route>
            </Switch>
          </Box>
        </BrowserRouter>
      </AppContextProvider>
    </Fragment>
  );
}

export default App;
