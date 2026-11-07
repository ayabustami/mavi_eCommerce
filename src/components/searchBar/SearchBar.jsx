
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar() {
    return <>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <TextField fullWidth size="small" placeholder="Search ..."  sx={{ bgcolor: 'rgba(241, 251, 255, 0.85)' } }/>
            <SearchIcon fontSize="small" />
        </Box>
    </>
}