import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Container, Typography, Grid, Paper, Box, Link, CssBaseline } from '@material-ui/core';
import { setUser } from './state/actions';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import doctoriteImage from '../assests/download.png';  

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '14%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    width: '100%',  
    marginBottom: theme.spacing(2),  
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = { username, email, password };
    dispatch(setUser(user));
    navigate('/main');
  };

  return (
    <Container maxWidth="md" className='mt-7'>
      <Grid container component="main" justify="center">
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={9} square>
          <div className={classes.paper}>
            <img src={doctoriteImage} alt="Doctorite Logo" className={classes.logo} />
           
            <Typography component="h1" variant="h5">
              Login Here
              <hr/>
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Email"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Password"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.submit}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
           
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginForm;
