import React from 'react';
import ImageSlider from 'react-simple-image-slider';
import { Box } from '@mui/material';

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
        <Box
            sx={{
                width: '100%',
                maxWidth: 600,
                marginX: 'auto',
                marginY: 4,
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: 4,
            }}
        >
            <ImageSlider
                width="100%"
                height={400}
                images={images}
                showNavs
                showBullets
                navStyle={2}
                bulletStyle={2}
                style={{position: 'relative'}}
            />
        </Box>
    );
};

export default SlideShow;
