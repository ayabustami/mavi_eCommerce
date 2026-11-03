import userCategories from '../hooks/GetCategories';
import { CircularProgress, Alert, Typography, Box } from '@mui/material';
import CategoryItem from './CategoryItem';

export default function Categories() {
    const { categories, isLoading, error } = userCategories();
 console.log(categories);
    if (isLoading) return <CircularProgress />;
    if (error) return <Alert severity="error">Error loading Categories</Alert>;

    return <>
        <Box sx={{ py: 3 }}>
            <Box sx={{ display: 'flex',  justifyContent: 'space-between',  alignItems: 'center',  mb: 2  }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Shop By Categories
                </Typography>

                <Typography variant="caption" sx={{ cursor: 'pointer' }}> View All → </Typography>
            </Box>

            <Box  sx={{ display: { xs: 'flex', md: 'grid' }, gridTemplateColumns: { md: 'repeat(4, minmax(0, 1fr))' }, gap: 2, overflowX: { xs: 'auto', md: 'visible' },
            scrollSnapType: { xs: 'x mandatory', md: 'none' }, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none'}}}>
                            {categories.map((category) => (
                                      <CategoryItem key={category.id} Category={category} />

                                                        ))}
            </Box>
        </Box>
    
    </>
    }