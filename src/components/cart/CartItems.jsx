
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import UseUpdateCart from '../hooks/UseUpdateCart.';
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete';
import UseRemoveItemCart from '../hooks/UseRemoveItemCart';
import { red } from '@mui/material/colors';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';



export default function CartItems({ item }) {
    const {mutate: updateCart ,isPending} = UseUpdateCart();
    const {mutate: deleteItemCart ,isPending:RemoveIsPending} = UseRemoveItemCart();
    const handleIncrease=()=>{
        updateCart({productId: item.productId ,count :item.count + 1})
    }
    const handleDecrease=()=>{
        updateCart({productId: item.productId ,count :item.count - 1})
    }
    const handleDelete = () => {
    deleteItemCart(
        { productId: item.productId },
        {
            onSuccess: () => {
                toast.success('Item removed from cart');
            },
            onError: () => {
                toast.error('Failed to remove item from cart');
            }
        }
        );
    };
    

    return (
        <>
                    <ToastContainer position="top-right" autoClose={3000} />

                    <Card key={item.productId}
                        sx={{ display: 'flex', p: 2 }}
                    >
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight={600}>
                                {item.productName}
                            </Typography>

                            <Typography color="text.secondary" mt={1}>
                                Quantity: {item.count}
                            </Typography>

                            <Typography color="primary" fontWeight={700} mt={1}>
                                ${item.price}
                            </Typography>
                        </CardContent>
                        <Box sx={{display :'flex' ,  alignItems : 'center' , border : 1 , borderColor :'grey.400', borderRadius:1 , m:5 ,height:40 ,width:80}}>
                            <IconButton onClick={handleDecrease} disabled={isPending || item.count==1 }>
                                <RemoveIcon fontSize='small'/>
                            </IconButton>
                            <Typography >{item.count}</Typography>
                            <IconButton onClick={handleIncrease} disabled={isPending }>
                                <AddIcon fontSize='small'/>
                            </IconButton>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography fontWeight={700}>
                                ${item.totalPrice}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton onClick={handleDelete} disabled={RemoveIsPending  }>
                                <DeleteIcon fontSize='small' sx={{ color: red }} />
                            </IconButton>
                        </Box>

                    </Card>
                
            
        </>
    );
}
