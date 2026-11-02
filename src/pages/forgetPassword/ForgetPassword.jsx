import { Button, Container, Typography, Box, Grid, TextField, InputAdornment ,Alert } from '@mui/material'
import LockResetIcon from '@mui/icons-material/LockReset'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { Link , useNavigate} from 'react-router'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { forgotPasswordSchema } from '../../validations/AuthSchemas'
import { useState } from 'react'
import axios from 'axios'

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);
    const {register, handleSubmit, formState: { errors, isSubmitting }
    } = useForm({
    resolver: yupResolver(forgotPasswordSchema), mode: "onBlur" })
    const onSubmit = async (data) => {
        try {
        await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/SendCode', data);
        navigate('/auth/verify-code', { state: { email: data.email } });
        }
        catch (error) {
        setServerError("Failed to send the code. Please try again.");
        }
    }


    return <>
        <Container maxWidth="sm">
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', boxShadow:3 , p:4, borderRadius:2, my:10}}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:64, height:64, borderRadius:'50%', color:'primary.main', mb:2}}>
            <LockResetIcon fontSize="large" />
            </Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight:600, fontSize:'24px'}}>
            Forgot Password?
            </Typography>
            {serverError ? <Alert severity="error" sx={{mb:2}}>{serverError}</Alert> : null}
            <Typography variant="body1" component="p" gutterBottom sx={{ fontSize:'14px', textAlign:'center'}}>Enter the email associated with your account, and we'll send you a 6-digit code or link to reset your password.</Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off" sx={{width:'100%'}}>
            <Grid container spacing={2}>
                <Grid size={12}>
                <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Email Address</Typography>
                <TextField fullWidth variant="outlined"
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><EmailOutlinedIcon fontSize="small" /></InputAdornment> } }}
                {...register("email")} error={!!errors.email} helperText={errors.email?.message}
                />
                </Grid>
                <Grid size={12} sx={{mt:2, display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                <Button type="submit" variant="contained" color="primary" fullWidth endIcon={<ArrowForwardIcon />} disabled={isSubmitting}> {isSubmitting ? "Loading..." : "Send Code"} </Button>
                </Grid>
                <Grid size={12} sx={{mt:2, display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                <Typography variant="body2" component="p" gutterBottom sx={{fontSize:'14px'}}>
                    <Link to="/auth/login" style={{ display:'inline-flex', alignItems:'center', gap:4, textDecoration:'none' }}><ArrowBackIcon fontSize="small" /> Back to Login</Link>
                </Typography>
                </Grid>
            </Grid>

            </Box>
        </Box>

        </Container>
    </>
    }