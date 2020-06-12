import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import { ROOT_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from './constants';
import ThemeContextProvider  from './contexts/ThemeContext';

const useStyles = makeStyles((theme) => ({
  appContent: {
    padding: 30,
    height: '100%',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </Fragment>
  );
}

export default App;
