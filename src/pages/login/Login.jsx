import {Button , Container, Typography , Box, Grid, TextField } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {loginSchema} from '../../validations/AuthSchemas'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);
  const {register,handleSubmit,  formState: { errors , isSubmitting }
  }= useForm({
  resolver: yupResolver(loginSchema),mode: "onBlur" })
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', data);
      setSuccess(true);
      navigate('/', { replace: true });

    }
    catch (error) {
      setServerError("Login failed. Please try again.");
    }
  }
  


  return <>
    <Container maxWidth="sm">
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', boxShadow:3 , p:4, borderRadius:2, my:10}}>
        <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight:'semibold', fontSize:'24px'}}>
          Welcome Back!
        </Typography>
        {serverError ? <Alert severity="error">{serverError}</Alert> : null}
        <Typography variant="body1" component="p" gutterBottom sx={{fontWeight:'regular', fontSize:'14px'}}>sign in to access your orders, wishlist ,and saved addresses.</Typography>  
        <Box component="form"  onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Grid container spacing={2}>
            <Grid  size={12}>
              <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Email Address</Typography>
              <TextField fullWidth  variant="outlined"
              {...register( "email")} error={!!errors.email} helperText={errors.email?.message}
              />
            </Grid>
            <Grid  size={12}>
              <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Password</Typography>
              <TextField fullWidth  type="password" variant="outlined"
              {...register( "password")} error={!!errors.password} helperText={errors.password?.message}
              />
            </Grid>
            <Grid  size={12} sx={{mt:2 ,display:'flex', justifyContent:'space-between' ,alignItems:'center' , alignContent:'center'}}>
              <FormControlLabel  control={<Checkbox {...register("rememberMe")} />} label="Remember me" />          
              <Link to="/auth/forget-password" style={{ textDecoration: 'none', color: '#1976d2', fontSize: '14px' }}> Forgot Password?</Link> 
            </Grid>
            <Grid  size={12} sx={{mt:2 ,display:'flex', alignItems:'center' , alignContent:'center', justifyContent:'center'}}>
              <Button  type="submit" variant="contained" color="primary"  endIcon={<ArrowForwardIcon />}   disabled={isSubmitting}> {isSubmitting ? "Loading..." : "Login"} </Button>
            </Grid>
            <Grid  size={12} sx={{mt:2 ,display:'flex', alignItems:'center' , alignContent:'center', justifyContent:'center'}}>
              <Typography variant="body2" component="p" gutterBottom sx={{fontSize:'14px'}}>Don't have an account? <Link to="/auth/register">Register</Link></Typography>
            </Grid>
          </Grid>

        </Box>
      </Box>
      
    </Container>
  </>
}
