import {Box ,Container ,Typography ,CircularProgress ,Alert ,Card ,CardMedia ,CardContent ,Grid ,Divider ,Stack, Button } from '@mui/material';
import useCart from '../../components/hooks/GetCart';
import { UseAuthStore } from '../../store/UseAuthStore';
import { Link } from 'react-router';
import CartItems from '../../components/cart/CartItems';
import CartSummary from '../../components/cart/CartSummary';
import UseClearCart from '../../components/hooks/UseClearCart';
import { toast } from 'react-toastify';

export default function Cart() {
    const { mutate: clearCart, isPending } = UseClearCart();
    const handleClearCart = () => {
        clearCart(undefined, {
            onSuccess: () => {
                toast.success('Cart cleared successfully');
            },
            onError: () => {
                toast.error('Failed to clear cart');
            }
        });
    };

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
            <Container sx={{ py: 10, textAlign: 'center'  ,py: 30 }}>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',mb: 4 }}>
                <Typography variant="h4" fontWeight={700}>
                    Shopping Cart
                </Typography>

                <Button  color="error"  variant="outlined" onClick={handleClearCart}   disabled={isPending}>
                    {isPending ? 'Clearing...' : 'Clear Cart'}
                </Button>
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Stack spacing={2}>
                        {cartItems.map((item) => (
                                    <CartItems key={item.productId} item={item} />
                                ))}
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