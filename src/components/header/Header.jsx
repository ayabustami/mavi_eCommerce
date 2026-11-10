import { useState } from 'react';
import {  Button ,AppBar, Box, Container, IconButton, Typography ,Toolbar,Stack} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
import Navbar from '../navbar/Navbar'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router';
import { UseAuthStore } from '../../store/UseAuthStore';

 

export default function Header() {
  const token = UseAuthStore((state) => state.Token);
  const logout = UseAuthStore((state) => state.logout);
  

  return <>
    <Box component="header">
      <AppBar   position="fixed"  elevation={0}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.85)', color: 'text.primary', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0, 0, 0, 0.08)'}}>
        <Container maxWidth="xl">
          <Toolbar   disableGutters sx={{width: '100%', display: 'grid', alignItems: 'center', py: 2, minHeight: 'auto', gridTemplateAreas: { xs: '"logo actions" "search search"', md: '"logo search actions"'},
                                                                    gridTemplateColumns: {
                                                                      xs: '1fr auto',
                                                                      md: 'auto minmax(320px, 560px) auto'},gap: { xs: 2, md: 3 }}}> 
            <Box sx={{ gridArea: 'logo' }}>
              <Logo />
            </Box>
            <Box sx={{ gridArea: 'search' ,width:'100%', minWidth:0}}>
              <SearchBar />
            </Box>
            <Stack direction="row" spacing={1}  sx={{  alignItems : 'center' ,gridArea: 'actions', justifySelf: 'end'}}>
              <IconButton aria-label="Wishlist" sx={{ color: 'text.primary' }}>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton component={Link} to="/cart" aria-label="Cart" sx={{ color: 'text.primary' }}>
                  <ShoppingBagOutlinedIcon />
              </IconButton>
              {token ? (
                <Stack direction="row" spacing={1.25}  sx={{alignItems : 'center' ,pt:1,pl: 2, ml: 1, borderLeft: '1px solid', borderColor: 'divider', textDecoration: 'none', color: 'text.primary' }}>
                  <AccountCircleIcon  sx={{ width: 25, height: 25 ,color: 'text.primary' }} />
                  <Typography variant="body2"  >
                    Test User
                  </Typography>
                  <Button color="inherit" size="small" onClick={logout} startIcon={<LogoutIcon />} >
                    Logout
                  </Button>
                </Stack>):
                (
                <Stack direction="row"  spacing={1}  sx={{alignItems : 'center' , ml: 1 }}>
                      <Button component={Link} color="inherit" to="/auth/login">
                        Sign In
                      </Button>
                      <Button component={Link} variant="contained" to="/auth/register">
                        Sign Up
                      </Button>
                </Stack>
                  )}
            </Stack>               
          </Toolbar> 
        </Container>
        <Navbar />
      </AppBar>
    </Box>
  </>
}