import { Typography ,Divider ,Stack  } from '@mui/material';


export default function CartSummary({cartItems}) {
    const total = cartItems.reduce((sum, item) => {
        const product = item.product ?? item.Product ?? item;
        const quantity = item.count ?? item.Count ?? 1;
        return sum + (Number(product.price ?? product.Price) * quantity);
    }, 0);
    return <>
    <Typography variant="h6" fontWeight={700} mb={2}>
    Order Summary
    </Typography>
    <Divider sx={{ mb: 2 }} />
  
    <Stack direction="row" sx={{justifyContent:"space-between"}}>
        <Typography color="text.secondary">
            Subtotal
        </Typography>
        <Typography fontWeight={600}>
            ${total.toFixed(2)}
        </Typography>
    </Stack>
    <Divider sx={{ my: 2 }} />
    <Stack direction="row" sx={{justifyContent:"space-between"}}>
        <Typography fontWeight={700}>
            Total
        </Typography>
        <Typography color="primary" fontWeight={700}>
            ${total.toFixed(2)}
        </Typography>
    </Stack>
  </>
}
