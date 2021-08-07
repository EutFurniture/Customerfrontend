import React ,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './sign.css';
import Axios from'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from './customer/Footer'
import { Fragment } from 'react';
const schema = yup.object().shape({
    email:  yup.string().email().required('Enter the email'),
    password: yup.string().required("Enter the Password"),

});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:theme.spacing(3),
    marginRight:theme.spacing(2),
    marginLeft:theme.spacing(2),
  },
 rem:{
marginLeft:"-45.2%",
 },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const[LoginStatus, setLoginStatus] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    
    Axios.defaults.withCredentials=true;
    const logininfo = (data) => {
  
      Axios.post("http://localhost:3001/login", {
        
       email: data.email,
        password: data.password,
        
      }).then((response) => {
        console.log(response)
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          
          window.location.href='/customer/new/'
          //console.log('success');
          // if(response.data[0].role='admin'){
          //   window.location.href='/admin/Dashboard'
          // }
        }
       
  
      });
    };

useEffect(() => {
  Axios.get("http://localhost:3001/login").then((response)=>{
    
  console.log(response);
  
     if(response.data.loggedIn == true){
      setLoginStatus(response.data.user[0].customer_Id);
    
    }
 

  });
 
}, []);
  return (
    <Fragment>
    <div className="cont">
    <div className="contactbox">
  <div className="left"> 
   <h3 className="make">
         Make Your Home Feel Comfortable
        </h3></div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(logininfo)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            {...register('email')}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password')}
          />
          <FormControlLabel className={classes.rem}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
    </div>
    
    </div>
    <Footer />
    </Fragment>
  );
}
