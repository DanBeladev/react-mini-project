import React from 'react';
import MessageList from './MessageList';
import Form from './Form';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form:{
    width: '100%'
  }
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
        <Grid className= {classes.form} item xs={6}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
