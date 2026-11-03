import React from 'react'
import { Container, Typography , Box , Grid} from '@mui/material';
import useCategories  from '../../components/hooks/GetCategories';
import { CircularProgress, Alert } from '@mui/material';
import useProducts from '../../components/hooks/GetProducts';
export default function Home() {

return <>
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
  <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, fontSize: '24px' }}>
    Home
  </Typography>
  </Box>
  </>
/*const { products, isLoading, error } = useProducts();

console.log(products);
  if(isLoading) return <CircularProgress />;
  if(error) return <Alert severity="error">Error loading products</Alert>;
    
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight:600, fontSize:'24px'}}> Shop By Categories</Typography>
      <Container maxWidth="lg">
        {products.map((product) => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
      </Container>
    </Box>


  )
*/}
