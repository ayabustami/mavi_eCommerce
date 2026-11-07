
import { Box, Card, CardContent, Typography } from '@mui/material';

export default function CartItems({ cartItems }) {

    return (
        <>
            {cartItems.map((item) => {

                return (
                    <Card
                        key={item.productId}
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

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography fontWeight={700}>
                                ${item.totalPrice}
                            </Typography>
                        </Box>
                    </Card>
                );
            })}
        </>
    );
}
