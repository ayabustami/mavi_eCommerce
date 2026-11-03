import {  Box, Container, IconButton, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
import Navbar from '../navbar/Navbar'

export default function Header() {
  return <>
    <Box component="header" sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="xxl">
        <Box
          sx={{ display: 'grid', alignItems: 'center',  py: 2,  gridTemplateAreas: { xs: '"logo actions" "search search"', md: '"logo search actions"' },gridTemplateColumns: { xs: '1fr auto', md: '1fr minmax(320px, 560px) 1fr' },}}>
          <Box sx={{ gridArea: 'logo' }}>
            <Logo />
          </Box>
          <Box sx={{ gridArea: 'search' }}>
            <SearchBar />
          </Box>
          <Box direction="row" alignItems="center" spacing={1} sx={{display: 'flex', gridArea: 'actions', justifySelf: 'end' }}>
            <IconButton aria-label="Wishlist" sx={{ color: 'text.primary' }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="Cart" sx={{ color: 'text.primary' }}>
                <ShoppingBagOutlinedIcon />
            </IconButton>
            <Box direction="row" alignItems="center" spacing={1.25} sx={{ display:  'flex',alignItems : 'center',justifyContent : 'center',pl: 2, ml: 1, borderLeft: '1px solid', borderColor: 'divider', textDecoration: 'none', color: 'text.primary' ,gap: 0.5}}>
                <AccountCircleIcon  sx={{ width: 25, height: 25 ,color: 'text.primary' }} />
                <Typography variant="body2" >
                  Test User
                </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <Navbar />
    </Box>
  </>
}