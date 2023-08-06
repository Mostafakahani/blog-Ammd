import { Box, Grid } from "@mui/material";

const ImageItem = () => {
    const images = [
        {
            url: 'https://abzarwp.com/static/uploads/2023/04/CHATGPT.webp',
            alt: 'image-alt',


        },
        {
            url: 'https://abzarwp.com/static/uploads/2022/08/payamito0.webp',
            alt: 'image-alt',


        }
    ]

    return (
        <Grid container spacing={2} sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: { xs: 'column', md: 'row' }, // تنظیم جهت در موبایل به صورت عمودی
            my: 3
        }}>
            {images.map((image, index) => (
                <Box
                    key={index}
                    component='img'
                    src={image.url}
                    alt={image.alt}
                    sx={{
                        borderRadius: '15px',
                        width: { xs: '100%', md: '49%' }, // تغییر عرض به 100% تا در موبایل عرض تصویر به عرض صفحه برسد
                        marginBottom: '1rem', // تغییر فاصله پایینی بین تصاویر
                        mx: '0.5px'
                    }}
                    xs={12} sm={6} md={6} // تنظیمات ریسپانسیو برای دسکتاپ
                />
            ))}
        </Grid>
    )
}

export default ImageItem;
