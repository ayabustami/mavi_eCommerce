import React from 'react'
import {  Typography , Box} from '@mui/material';
import Products from '../../components/products/Products';
import Categories from '../../components/categories/Categories';
export default function Home() {

return <>
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' ,   backgroundColor: '#f1fbff' }}>
  <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, fontSize: '24px' }}>
    Home
  </Typography>
  <Categories/>
  <Products/>  </Box>

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
