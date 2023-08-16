import { Box, Grid } from "@mui/material";

const images = [
    { src: "/InstagramStory.jpg", alt: "Image 1" },
    { src: "/InstagramStory.jpg", alt: "Image 2" },
    { src: "/InstagramStory .jpg", alt: "Image 3" },
    // Add more images to the array
];

const ImageStoryBox = () => {
    return (
        <Grid container spacing={2}>
            {images.map((image, index) => (
                <Grid item xs={6} md={3} key={index}>
                    <Box component='img' src={image.src} alt={image.alt} sx={{ width: '100%' }} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ImageStoryBox;
