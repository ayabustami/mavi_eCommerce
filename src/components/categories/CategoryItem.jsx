import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router'
import categoryImg from  '../../assets/Category.jpg'
export default function CategoryItem({ Category }) {
  const { id, name } = Category

  return <>
  <Link>
      <Card key={id} sx={{ borderRadius: 4, boxShadow: '3px 3px 3px 3px rgba(1, 28, 64, 0.08)' , transition: 'all 0.5s ease',
      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(1, 28, 64, 0.10)', }}}>
        <Box sx={{ position: 'relative' ,padding:5}}>
          <CardMedia component="img" image={categoryImg} alt={name || 'Category'} sx={{ objectFit: 'cover' }} />
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {name}
          </Typography>

        </Box>
      </Card>
      </Link>
  </>
}