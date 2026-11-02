import { Button, Container, Typography, Box, Grid, TextField } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined'
import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { verifyCodeSchema } from '../../validations/AuthSchemas'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert';

const RESEND_SECONDS = 60
const SEND_CODE_URL = 'https://knowledgeshop.runasp.net/api/auth/Account/SendCode'

export default function VerifyCode() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const email = state?.email;
    const [serverError, setServerError] = useState(null);
    const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
    const {register, handleSubmit, reset, formState: { errors }
    } = useForm({
    resolver: yupResolver(verifyCodeSchema), mode: "onBlur" })

    useEffect(() => {
        if (secondsLeft <= 0) return;
        const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
        return () => clearTimeout(timer);
    }, [secondsLeft]);

    const handleResend = async () => {
        try {
        setServerError(null);
        await axios.post(SEND_CODE_URL, { email });
        reset();
        setSecondsLeft(RESEND_SECONDS);
        }
        catch (error) {
        setServerError("Failed to resend the code. Please try again.");
        }
    }

    const onSubmit = (data) => {
        navigate('/auth/test', { state: { email, code: data.code } });
    }

    if (!email) return <Navigate to="/auth/forgot-password" replace />


    return <>
        <Container maxWidth="sm">
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',  boxShadow:3 , p:4, borderRadius:2, my:10}}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:64, height:64, borderRadius:'50%', mb:2}}>
            <MarkEmailReadOutlinedIcon fontSize="large" />
            </Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight:600, fontSize:'24px'}}>
            Verify Your Account
            </Typography>
            {serverError ? <Alert severity="error" sx={{mb:2}}>{serverError}</Alert> : null}
            <Typography variant="body1" component="p" sx={{fontWeight:400, fontSize:'14px'}}>We sent a 6-digit verification code to</Typography>
            <Box sx={{display:'inline-flex', alignItems:'center', gap:0.5, mt:1, mb:2, px:1.5, py:0.5, borderRadius:10, border:'1px solid'}}>
            <Typography variant="body2" sx={{fontWeight:500}}>{email}</Typography>
            <Link to="/auth/forgot-password" style={{ textDecoration:'none', fontSize:14 }}>(Edit)</Link>
            </Box>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off" sx={{width:'100%'}}>
            <Grid container spacing={2}>
                <Grid size={12}>
                <Typography variant="body2" component="h3" gutterBottom sx={{fontSize:'14px'}}>Verification Code</Typography>
                <TextField fullWidth variant="outlined" placeholder="000000"
                slotProps={{ htmlInput: { inputMode:'numeric', maxLength:6, style:{ textAlign:'center', fontSize:24, fontWeight:600, letterSpacing:'0.5em', height:'auto', padding:'12px 14px' } } }}
                {...register("code")} error={!!errors.code} helperText={errors.code?.message}
                />
                </Grid>
                <Grid size={12} sx={{display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                <Typography variant="body2" component="p" sx={{fontSize:'14px', color:'text.secondary'}}>
                    Didn't receive the code?{' '}
                    {secondsLeft > 0
                    ? <>Resend code in <Box component="span" sx={{fontWeight:600}}>00:{String(secondsLeft).padStart(2, '0')}</Box></>
                    : <Box component="button" type="button" onClick={handleResend} sx={{border:0, p:0}}>Resend code</Box>}
                </Typography>
                </Grid>
                <Grid size={12} sx={{mt:2, display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                <Button type="submit" variant="contained"  fullWidth endIcon={<ArrowForwardIcon />} > Verify </Button>
                </Grid>
                <Grid size={12} sx={{mt:2, display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                <Typography variant="body2" component="p" gutterBottom sx={{fontSize:'14px'}}>
                    <Link to="/auth/login" style={{ display:'inline-flex', alignItems:'center', textDecoration:'none' }}><ChevronLeftIcon fontSize="small" /> Back to Login</Link>
                </Typography>
                </Grid>
            </Grid>

            </Box>
        </Box>

        </Container>
    </>
    }