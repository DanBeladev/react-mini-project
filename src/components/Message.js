import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container:{
    background: 'darkturquoise',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 'fit-content',
    overflowWrap: 'anywhere'
    }
  }));
    
 const Message = (props) =>{
    const classes = useStyles();
     const { userName, text} = props.data;
    return (
        <div className={classes.container}>
            <Typography color="secondary">{userName}</Typography>
            <Typography color="textPrimary">{text}</Typography>
        </div>
    )
}

export default Message
