import { Box, Button, Card, CardMedia, IconButton, Typography, Rating } from '@mui/material'
import { Link } from 'react-router'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

export default function ProductItem({ product }) {
  const { id, image, name, price, rate } = product

  return <>
  <Link>
      <Card key={id} sx={{ borderRadius: 4, boxShadow: '3px 3px 3px 3px rgba(1, 28, 64, 0.08)' , transition: 'all 0.5s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(1, 28, 64, 0.10)',
      }}}>
        <Box sx={{ position: 'relative' ,padding:5}}>
          <CardMedia component="img" image={image} alt={name || 'Product'} sx={{ objectFit: 'cover' }} />
          <IconButton aria-label="Add to wishlist" size="small" sx={{ position: 'absolute', top: 12, right: 12, bgcolor: '#fff'}}>
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {name}
          </Typography>

          <Rating value={rate || 0} readOnly size="small"  precision={.5} />

          <Typography variant="body1"  sx={{ fontWeight: 600, mt: 0.5 }}>
            ${Number(price).toFixed(2)}
          </Typography>

          <Button   startIcon={<ShoppingBagOutlinedIcon />}  sx={{  width:'90%',display:'flex',mx:'auto',justifyContent: 'center',borderRadius:3 , my: 3, p:2 , bgcolor: '#E1F1F0', color: '#046772',boxShadow: '3px 3px 3px 3px rgba(1, 28, 64, 0.08)', '&:hover': { bgcolor: '#D0E8E6',boxShadow: 'none' } }} >
            Add to Cart
          </Button>
        </Box>
      </Card>
      </Link>
  </>
}