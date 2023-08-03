import React from 'react';
import { Container, Grid, Box } from '@mui/material';

const ItemHome = () => {
    const images = [
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/98d0c52c68daa732ea2a34b345fec80322654476_1690974366.jpg',
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/b7ce26b91a2ec80e633bf9cf7fdfc527f451ac7a_1690898814.jpg',
    ];

    return (
        <Container>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center'>
                <Grid item xs={12} md={8}>
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            component='img'
                            width='100%'
                            maxWidth='350px'
                            height='auto'
                            borderRadius='15px'
                            src={image}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* Your content here */}
                    s
                </Grid>
            </Grid>
        </Container>
    );
};

export default ItemHome;
