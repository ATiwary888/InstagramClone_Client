import React, {useState,useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button} from '@material-ui/core';
import memories from './images/memories.jpg';
import Posts from './cmp/Posts/Posts';
import Form from './cmp/Form/Form';
import Auth from './cmp/Auth'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {getPost} from './actions/posts';
import posts from './reducers/posts';
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

const Homecmp = () =>{
    const [currentId, setCurrentId]=useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    
    const clear = () =>{
        localStorage.clear();
        history.push('/auth');

    }

    useEffect(()=>{
        dispatch(getPost());
    },[currentId,dispatch]);
    var email = JSON.parse(localStorage.getItem('profile'))?.email
    if( !email||email===""){history.push('/auth')

    }
    
    return (
        <StylesProvider injectFirst>
        <Container maxidth = "lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={memories} alt="icon" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <Button colour = 'primary' variant="contained" className = {classes.button} onClick = {clear}> Logout  </Button>
      </AppBar>
            
             <Grow in>
                <Container>
                <Grid container justify = "space-between" alignItems = "stretch" spacing = {0}>
                    <Grid item xs={12} sm={8}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid> 
                </Container>
            </Grow>

            
          
           
        </Container>
        </StylesProvider>
       
       
    )
}

export default  Homecmp;