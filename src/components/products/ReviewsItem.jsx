
import { Typography, Grid, Rating, Stack, Paper } from '@mui/material';

export default function ReviewsItem({ reviews = [] }) {

    return <>
        <Grid container spacing={3}>
            {reviews.map((review, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Paper  variant="outlined" sx={{ p: 3, borderRadius: 3 }} >
                        <Stack  direction="row"  sx={{justifyContent:"space-between" , alignItems:"center" }} >
                            <Typography fontWeight={700}>   {review.userName} </Typography>
                            <Rating  value={review.rating}  readOnly  size="small"  />
                        </Stack>
                        <Typography color="text.secondary" mt={2}>  {review.comment}  </Typography>
                        <Typography  variant="caption"  color="text.disabled"  display="block" mt={2} >
                            {new Date(review.createdAt).toLocaleDateString()}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </>
}
