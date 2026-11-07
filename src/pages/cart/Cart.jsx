import {Box ,Container ,Typography ,CircularProgress ,Alert ,Card ,CardMedia ,CardContent ,Grid ,Divider ,Stack, Button } from '@mui/material';
import useCart from '../../components/hooks/GetCart';
import { UseAuthStore } from '../../store/UseAuthStore';
import { Link } from 'react-router';
import CartItems from '../../components/cart/CartItems';
import CartSummary from '../../components/cart/CartSummary';
export default function Cart() {

    const { data, isLoading, error } = useCart();
    const token= UseAuthStore((state)=> state.Token);

    if (!token){
        return<>
        <Box sx={{textAlign: 'center', pt:30}}>
            <Typography variant='h5' sx={{mb:2}}>
                Please Login to view your cart
            </Typography>
            <Button component={Link} to= '/auth/login'>
                Login
            </Button>
        </Box>
        
        </>
    }
    if (isLoading) {
        return (
            <Box sx={{display:"flex", justifyContent:"center", mt:10}}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Alert severity="error">
                {error.message}
            </Alert>
        );
    }

    const cartItems = data?.items ?? [];

    if (cartItems.length === 0) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={700}>
                    Your Cart is Empty
                </Typography>

                <Typography color="text.secondary" mt={1}>
                    You haven't added any products to your cart yet.
                </Typography>
            </Container>
        );
    }

    

    return <>

        <Container maxWidth="lg"  sx={{ py: 30 }}>
            <Typography variant="h4" fontWeight={700} mb={4}>
                Shopping Cart
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Stack spacing={2}>
                        <CartItems cartItems ={cartItems}/>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ p: 3 }}>
                        <CartSummary cartItems={cartItems} />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </>
}