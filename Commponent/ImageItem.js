import { Box, Grid } from "@mui/material";

const ImageItem = () => {
    return (
        <Grid container spacing={2} sx={{
            display: 'flex',
            overflow: 'hidden',
            justifyContent: 'space-between',
            my: 3

        }}>
            <Box
                component='img'
                src="https://abzarwp.com/static/uploads/2023/04/CHATGPT.webp"
                sx={{
                    borderRadius: '15px',
                    width: '49%',
                }}
            />
            <Box
                component='img'
                src="https://abzarwp.com/static/uploads/2022/08/payamito0.webp"
                sx={{
                    borderRadius: '15px',
                    width: '49%',
                }}
            />
        </Grid>
    )
}

export default ImageItem;
