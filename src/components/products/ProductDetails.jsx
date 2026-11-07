
import {  useNavigate, useParams } from 'react-router';
import useProductDetails from '../hooks/GetProductDetails';
import {Box, Grid, Typography, CircularProgress, Alert, Rating, Button, Divider, Chip, Stack } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import ReviewsItem from './ReviewsItem';
import UseAddToCart from '../hooks/UseAddToCart';
import { UseAuthStore } from '../../store/UseAuthStore'
import { ToastContainer, toast } from 'react-toastify';


export default function ProductDetails() {

    const { id } = useParams(); 
    const token = UseAuthStore((state)=>state.Token);

    const navigate = useNavigate();
    const {mutate:addToCart,isPending:addToCartPending} =UseAddToCart();
    const { product, isLoading, error } = useProductDetails(id);
    const inStock=product.quantity >0;
    const notify = () => toast("Product Added to Cart!");

    

    if (isLoading) {
        return <>
            <Box display="flex" sx={{justifyContent: "center" , mt:10}}>
                <CircularProgress />
            </Box>
        </>
    }

    if (error) {
        return <>
            <Alert severity="error">
                {error.message}
            </Alert>
        </>
    }

    const handleAddToCart =()=>{
            if(!token){
                console.log(token);
                navigate('/auth/login');
                return;
            }
            
                addToCart(product.id,{
                    onSuccess :()=>{
                        toast.success("Product Added to Cart!");
                    },
                    onError:(error)=>{
                        console.log(error.message);
                        toast.error(error.message || "Something went wrong!");                    }
                });

        }
    if (!product) return null;

    return (<>                     
    <ToastContainer position="top-center" />

        
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: { xs: 2, md: 4 } }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ bgcolor: '#f5f5f5', borderRadius: 3, overflow: 'hidden' }} >
                        <Box component="img" src={product.image}  alt={product.name}
                            sx={{  width: '100%', height: { xs: 300, md: 480 }, objectFit: 'contain', p: 2 }} />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography color="primary" fontWeight={600}>
                        Product Details
                    </Typography>
                    <Typography variant="h4" fontWeight={700} mt={2}>
                        {product.name}
                    </Typography>
                    <Stack direction="row" sx= {{alignItems:"center", spacing:1, mt:2 }}>
                        <Rating value={product.rate || 0} readOnly />
                        <Typography color="text.secondary">
                            ({product.reviews?.length || 0} Reviews)
                        </Typography>
                    </Stack>
                    <Typography variant="h4" color="primary" fontWeight={700} mt={3} >
                        ${product.price}
                    </Typography>
                    <Chip label={inStock ? "InStock":"OutOfStock"}
                            color={inStock >0 ?"success":"error"}>
                    </Chip>
                    <Divider sx={{ my: 3 }} />
                    <Typography sx={{color:"text.secondary", lineHeight:1.8 }}>
                        {product.description}
                    </Typography>
                    <Stack  direction={{ xs: 'column', sm: 'row' }}  spacing={2}   mt={4}>
                        <Button  variant="contained" size="large" disabled={!inStock || addToCartPending } onClick={handleAddToCart } startIcon={<ShoppingCart />} sx={{ flex: 1, py: 1.5 }}>
                            Add To Cart
                        </Button>

                    </Stack>
                </Grid>
            </Grid>
            <Box mt={8}>
                <Typography variant="h5" fontWeight={700} mb={3}>
                    Customer Reviews
                </Typography>
                <Grid container spacing={3}>
                    <ReviewsItem  reviews={product.reviews}/>
                </Grid>
            </Box>
        </Box>
        </>   
    );
}
