import { Box, Link, Typography } from '@mui/material'
import Logo from '../../logo/Logo'
const LINKS = ['Privacy Policy', 'Terms of Service', 'Help Center']

export default function AuthFooter() {
    return <>
        <Box component="footer" sx={{ bgcolor: 'background.paper', borderTop: '1px solid' ,borderColor: 'divider', px: { xs: 2, md: 4 }, py: 2.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 1.5,}}>
            <Box direction="row" spacing={1} alignItems="center" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                <Logo size={10}  />
                <Typography variant="caption" color="text.secondary">
                © 2024 mavı marketplace inc. all rights reserved.
                </Typography>
            </Box>

            <Box direction="row" spacing={3} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
                {LINKS.map((label) => (
                <Link key={label} href="#" variant="caption" underline="hover" sx={{ color: 'text.secondary', fontWeight: 400 }}>
                    {label}
                </Link>
                ))}
            </Box>
    </Box>
</>
}