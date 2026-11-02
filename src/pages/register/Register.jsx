import {Button , Container, Typography , Box, Grid, TextField } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {registerSchema} from '../../validations/AuthSchemas'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Alert from '@mui/material/Alert';

export default function Register() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);
  const {register,handleSubmit,  formState: { errors , isSubmitting }
  }= useForm({
  resolver: yupResolver(registerSchema),mode: "onBlur" })
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', data);
      setSuccess(true);
      navigate('/auth/login');

    }
    catch (error) {
      setServerError("Registration failed. Please try again.");
    }
  }
  


  return <>
    <Container maxWidth="sm">
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', boxShadow:3 , p:4, borderRadius:2, my:10}}>
        <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight:'semibold', fontSize:'24px'}}>
          Create Account
        </Typography>
        {serverError ? <Alert severity="error">{serverError}</Alert> : null}
        <Typography variant="body1" component="p" gutterBottom sx={{fontWeight:'regular', fontSize:'14px'}}>Join MAVI for mindful shopping, curated artisan finds, and order tracking.</Typography>  
        <Box component="form"  onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12}}>
              <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>User Name</Typography>
              <TextField fullWidth  variant="outlined"
              {...register("userName")} error={!!errors.userName} helperText={errors.userName?.message}
              />
            </Grid>
            <Grid size={{ xs: 12}}>
              <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>First Name</Typography>
              <TextField fullWidth   variant="outlined"
              {...register( "fullName")} error={!!errors.fullName} helperText={errors.fullName?.message}
              />
            </Grid>
            <Grid  size={12}>
              <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Email</Typography>
              <TextField fullWidth  variant="outlined"
              {...register( "email")} error={!!errors.email} helperText={errors.email?.message}
              />
            </Grid>
            <Grid  size={12}>
              <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Phone Number</Typography>
              <TextField fullWidth  variant="outlined"
              {...register( "phoneNumber")} error={!!errors.phoneNumber} helperText={errors.phoneNumber?.message}
              />
            </Grid>
            <Grid  size={12}>
              <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Password</Typography>
              <TextField fullWidth  type="password" variant="outlined"
              {...register( "password")} error={!!errors.password} helperText={errors.password?.message}
              />
            </Grid>
            <Grid  size={12}>
              <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Confirm Password</Typography>
              <TextField fullWidth  type="password" variant="outlined"
              {...register( "confirmPassword")} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message}
              />
            </Grid>
            <Grid  size={12} sx={{mt:2 ,display:'flex', alignItems:'center' , alignContent:'center', justifyContent:'center'}}>
              <Button  type="submit" variant="contained" color="primary"  endIcon={<ArrowForwardIcon />}   disabled={isSubmitting}> {isSubmitting ? "Loading..." : "Register"} </Button>
            </Grid>
            <Grid  size={12} sx={{mt:2 ,display:'flex', alignItems:'center' , alignContent:'center', justifyContent:'center'}}>
              <Typography variant="body2" component="p" gutterBottom sx={{fontSize:'14px'}}>Already have an account? <Link to="/auth/login">Login</Link></Typography>
            </Grid>
          </Grid>

        </Box>
      </Box>
      
    </Container>
  </>
}
