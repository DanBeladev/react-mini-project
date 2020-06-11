import React, { Fragment } from 'react';
import MessageList from './MessageList';
import Form from './Form';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction='column'
        justify='flex-start'
        alignItems='center'
        spacing={3}
      >
        <Grid item xs={12}>
          <MessageList />
        </Grid>
        <Grid item xs={6}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
