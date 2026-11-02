import { Button, Container, Typography, Box, Grid, TextField } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import { Link, Navigate, useLocation } from 'react-router'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { resetPasswordSchema } from '../../validations/AuthSchemas'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Alert from '@mui/material/Alert';

export default function ResetPassword() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [serverError, setServerError] = useState(null);
    const {register, handleSubmit, formState: { errors, isSubmitting }
    }= useForm({
    resolver: yupResolver(resetPasswordSchema), mode: "onBlur" })

    const email = state?.email;
    const code = state?.code;

    const onSubmit = async (data) => {
        try {
        setServerError(null);
        await axios.patch('https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword', { email, code, ...data });
        navigate('/auth/login');
        }
        catch (error) {
        setServerError("Failed to reset the password. The code may be invalid or expired.");
        }
    }

    if (!email) return <Navigate to="/auth/forgot-password" replace />


    return <>
        <Container maxWidth="sm">
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', boxShadow:3 , p:4, borderRadius:2, my:10}}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:64, height:64, borderRadius:'50%', mb:2}}>
            <GppGoodOutlinedIcon fontSize="large" />
            </Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize:'24px'}}>
            Reset Password
            </Typography>
            {serverError ? <Alert severity="error" sx={{mb:2}}>{serverError}</Alert> : null}
            <Typography variant="body1" component="p" gutterBottom sx={{fontWeight:400, fontSize:'14px', textAlign:'center', color:'text.secondary'}}>Your identity has been verified. Create a new strong password for your MAVI account.</Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off" sx={{width:'100%'}}>
            <Grid container spacing={2}>
                <Grid size={12}>
                <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>New Password</Typography>
                <TextField fullWidth type="password" variant="outlined" placeholder="Enter new password"
                {...register("newPassword")} error={!!errors.newPassword} helperText={errors.newPassword?.message}
                />
                </Grid>
                <Grid size={12}>
                <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Confirm New Password</Typography>
                <TextField fullWidth type="password" variant="outlined" placeholder="Re-enter new password"
                {...register("confirmNewPassword")} error={!!errors.confirmNewPassword} helperText={errors.confirmNewPassword?.message}
                />
                </Grid>
                <Grid size={12} sx={{mt:2, display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                <Button type="submit" variant="contained" color="primary" fullWidth endIcon={<ArrowForwardIcon />} disabled={isSubmitting}> {isSubmitting ? "Loading..." : "Reset Password"} </Button>
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