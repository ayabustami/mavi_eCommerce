import { Box, Container, IconButton, Link, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import Logo from '../../logo/WhiteLogo'
const BG = '#14343D'
const TEXT = '#CDEEF9'
const ref = '#BDC9CA'

const COLUMNS = [
    {
        title: 'Shop All Collections',
        links: ['Living & Home', 'Fashion & Fragrance', 'Ceramics & Dining', 'Bedding & Linens', 'Special Deals'],
    },
    {
        title: 'Account & Support',
        links: ['Order Tracking', 'Returns & Refunds', 'Shipping Policy', 'FAQ & Help Center', 'Artisan Portal'],
    },
    {
        title: 'Editorial & Brand',
        links: ['About mavı', 'Sustainability & Quality', 'Editorial Journal', 'Careers', 'Privacy & Terms'],
    },
]

const BOTTOM_LINKS = ['Privacy Notice', 'Terms of Service', 'Cookie Preferences']

const SOCIALS = [
    { label: 'Website', icon: <LanguageIcon /> },
    { label: 'Email', icon: <MailOutlinedIcon /> },
    { label: 'Share', icon: <ShareOutlinedIcon /> },
]


export default function MainFooter() {
    return (
        <Box component="footer" sx={{ bgcolor: BG, color: TEXT, mt: 'auto' }}>
        <Container maxWidth="xl">
            <Box
            sx={{
                display: 'grid',
                gap: { xs: 4, md: 5 },
                py: { xs: 5, md: 7 },
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.4fr 1fr 1fr 1fr' },
            }}
            >

            <Box spacing={3}  sx={{ alignItems:"flex-start", maxWidth: 320 }}>
                <Logo color="#fff" />
                <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: '24px' }}>
                A tranquil digital marketplace connecting conscious connoisseurs with refined artisan wares,
                timeless homeware, and sustainable coastal luxuries.
                </Typography>
                <Box direction="row" spacing={1}>
                {SOCIALS.map(({ label, icon }) => (
                    <IconButton key={label} aria-label={label} sx={{ color: TEXT }}>
                    {icon}
                    </IconButton>
                ))}
                </Box>
            </Box>

            {COLUMNS.map(({ title, links }) => (
                <Box key={title}>
                <Typography variant="h3" component="h2" sx={{ color: '#fff', mb: 2 }}>
                    {title}
                </Typography>
                <Box spacing={1.5} component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
                    {links.map((label) => (
                    <li key={label}>
                        <Link href="#" variant="body2" underline="none" sx={{ color: TEXT, opacity: 0.8, '&:hover': { opacity: 1, textDecoration: 'underline' } , fontWeight: 400 }}>
                        {label}
                        </Link>
                    </li>
                    ))}
                </Box>
                </Box>
            ))}
            </Box>
        </Container>

        <Box sx={{ borderTop: '1px solid rgba(218, 245, 255, 0.12)' }}>
            <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1.5,
                py: 2.5,
            }}
            >
            <Typography variant="caption" sx={{ opacity: 0.8,  color: ref}}>
                © 2024 mavı marketplace inc. all rights reserved.
            </Typography>
            <Box direction="row" spacing={3}>
                {BOTTOM_LINKS.map((label) => (
                <Link key={label} href="#" variant="caption" underline="none" sx={{ color: ref, opacity: 0.8, '&:hover': { opacity: 1, textDecoration: 'underline' } , fontWeight: 400 ,p: 2}}>
                    {label}
                </Link>
                ))}
            </Box>
            </Container>
        </Box>
        </Box>
    )
    }