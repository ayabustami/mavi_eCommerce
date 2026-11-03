import useProducts from '../hooks/GetProducts';
import { CircularProgress, Alert, Typography, Box } from '@mui/material';
import ProductItem from './ProductItem';

export default function Products() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error loading products</Alert>;

  return (
    <Box sx={{ py: 3,
 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Featured Products
        </Typography>

        <Typography variant="caption" sx={{ cursor: 'pointer' }}>
          View All →
        </Typography>
      </Box>

      <Box
  sx={{
    display: { xs: 'flex', md: 'grid' },
    gridTemplateColumns: {
      md: 'repeat(4, minmax(0, 1fr))'
    },
    gap: 2,

    overflowX: { xs: 'auto', md: 'visible' },
    scrollSnapType: { xs: 'x mandatory', md: 'none' },

    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }}
>
  {products.map((product) => (
    <Box
      key={product.id}
      sx={{
        flex: {
          xs: '0 0 44%',
          sm: '0 0 46%',
          md: 'unset'
        },
        minWidth: 0,
        scrollSnapAlign: 'start'
      }}
    >
      <ProductItem product={product} />
    </Box>
  ))}
</Box>

    </Box>
  );
}