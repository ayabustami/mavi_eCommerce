import {  Typography , Box} from '@mui/material';
import Products from '../../components/products/Products';
import Categories from '../../components/categories/Categories';
export default function Home() {


return <>
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' ,   backgroundColor: '#f1fbff' ,pt:20,px:5 }}>

  <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, fontSize: '24px' }}>
    Home
  </Typography>       
  <Categories/>
  <Products/>
    </Box>

  </>
}
