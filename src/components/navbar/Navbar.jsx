import {  NavLink } from 'react-router'
import { Box, Button, Container, Typography,Stack } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'

const navLinkSx = {
  color: 'text.primary',
  borderRadius: 0,
  py: 1.75,
  px: 0.5,
  borderBottom: '2px solid transparent',
  '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
  '&.active, &.current': { color: 'primary.main', borderBottomColor: 'primary.main' },
}
const navLinkSxun = {
  color: 'black',
  borderRadius: 0,
  py: 1.75,
  px: 0.5,
  borderBottom: '2px solid transparent',
  '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
}

export default function Navbar() {


  return <>
    <Box component="nav" aria-label="Main navigation" sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="xxl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={3.5}>
          <Button component={NavLink} to="/" end sx={navLinkSx}>Home</Button>
          <Button component={NavLink} to="/" sx={navLinkSxun}> Shop All </Button>
          <Button   endIcon={<KeyboardArrowDownIcon />} sx={navLinkSxun} >Categories</Button>
        </Stack>

        <Stack direction="row" spacing={3} sx={{ display: 'flex' , color: 'text.secondary' , alignItems: 'center', gap: 1.5}}>
          <Stack direction="row" sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center', gap: 0.5 }}>
            <LocalShippingOutlinedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography variant="caption">Complimentary shipping over $150</Typography>
          </Stack>
          <Stack direction="row" spacing={3} sx={{display: 'flex' , color: 'text.secondary' , alignItems: 'center', gap: 0.5}}>
            <VerifiedOutlinedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography variant="caption">Authentic Artistry Guarantee</Typography>
          </Stack>
        </Stack>
      </Container>

    </Box>
  </>
}