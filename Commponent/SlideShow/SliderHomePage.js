import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Box, Container, Grid, Input, TextField, styled } from '@mui/material';

const images = [
    {
        url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/61fcbe4ce7991f5f6c0c1845cca5a68652da2d4d_1690699957.jpg",
    },
    {
        url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/b7ce26b91a2ec80e633bf9cf7fdfc527f451ac7a_1690898814.jpg",
    },
    {
        url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/98d0c52c68daa732ea2a34b345fec80322654476_1690974366.jpg",
    },
    // ادامه تصاویر...
];

const SlideShow = () => {
    return (
        <Container sx={{ maxWidth: { xs: 1, md: 1, sm: 1 } }}>
            <Carousel>
                {images.map((image, index) => (
                    <Grid key={index}>
                        <Box sx={{
                            width: '100%'
                        }} component='img' src={image.url} alt={`Slide ${index}`} />
                    </Grid>
                ))}
            </Carousel>
        </Container>
    );
};
export default SlideShow;
