import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper, Container } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import useStyles from './Authstyle';

import {useDispatch} from 'react-redux';
import {AuthLogin,realLogin} from '../actions/posts';
import {useSelector} from 'react-redux';

const Auth = () =>{
    const history = useHistory();
    const classes = useStyles();
    const [posts] = useSelector((state)=>state.xyz);
    console.log(posts);
    const [message, setMessage] = useState("")  // to handle login status

    const [authData, setAuthData] = useState({
        email:'', password:"", name : ""
    });
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // document.title = `You clicked ${posts?.posts.message} times`;
    //     console.log(posts);
    //   },[posts]);
    const [loginData, setLoginData] = useState({
        email:'', password:"", name : ""
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(authData.email);
        console.log(authData.password);
        dispatch(AuthLogin(authData,history));
        // history.push('/')
        

    }

    const handleLogin=(e) =>{
        e.preventDefault();
        dispatch(realLogin(loginData,history));
        console.log(loginData);


    }
    const k = posts?.messages==='Success';
    console.log(k)
    const z = posts?.messages;
    console.log(z)


    

    return (
        <Container  component="main">
            {
                k==false&&z?<Paper className={classes.paper} elevation={3}>
                    <p  style={{color: "red"}}>{posts?.messages}</p>
                    </Paper>:<h1></h1>
            }
       
        <Container component="main" maxWidth="xs">

            <Paper className={classes.paper} elevation={3}>
                <h3>Sign up</h3>
           <form  autoComplete= "off" noValidate onSubmit = {handleSubmit}>
               <TextField name = "title" variant = "outlined" label = "Name" fullWidth  value= {authData.name} onChange={(e)=>setAuthData({...authData,name:e.target.value})}/>
               <TextField name = "title" variant = "outlined" label = "Email" fullWidth  value= {authData.email} onChange={(e)=>setAuthData({...authData,email:e.target.value})}/>

               
               <TextField name = "title" variant = "outlined" label = "Password" fullWidth value= {authData.password} onChange={(e)=>setAuthData({...authData,password:e.target.value})}/>
              <Button type = "submit" variant="contained" color = "primary">Submit</Button>
           </form>
        </Paper>
           </Container>

<Container component="main" maxWidth="xs">
<Paper className={classes.paper} elevation={3}>
    <h3>Log in</h3>
<form  autoComplete= "off" noValidate onSubmit = {handleLogin}>
   <TextField name = "title"  variant = "outlined" label = "Name" fullWidth  value= {loginData.name} onChange={(e)=>setLoginData({...loginData,name:e.target.value})}/>
   <TextField name = "title" variant = "outlined" label = "Email" fullWidth  value= {loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})}/>

   
   <TextField name = "title" variant = "outlined" label = "Password" fullWidth value= {loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})}/>
  <Button type = "submit" variant="contained" color = "primary">Submit</Button>
</form>
</Paper>
</Container>
        </Container>
      
    );
}

export default Auth;