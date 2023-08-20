import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const BlogItem = () => {
    const posts = [
        {
            id: 1,
            title: "قالب سیستم آموزش آنلاین‌یا فروش فایل",
            content: "محتوای مطلب اول ...",
            img: '/01.webp'
        },
        {
            id: 2,
            title: "نمونه قرارداد طراحی سایت فریلنسری",
            content: "محتوای مطلب دوم ...",
            img: '/02.webp'
        },
        {
            id: 3,
            title: "نمونه پروپوزال طراحی سایت",
            content: "محتوای مطلب اول ...",
            img: '/03.webp'
        },
        {
            id: 4,
            title: "افکت اینستاگرام گزینه ی چپ یا راست",
            content: "محتوای مطلب دوم ...",
            img: '/04.webp'
        },
        {
            id: 4,
            title: "افکت اینستاگرام گزینه ی چپ یا راست",
            content: "محتوای مطلب دوم ...",
            img: '/04.webp'
        },
        {
            id: 3,
            title: "نمونه پروپوزال طراحی سایت",
            content: "محتوای مطلب اول ...",
            img: '/03.webp'
        },
        {
            id: 4,
            title: "افکت اینستاگرام گزینه ی چپ یا راست",
            content: "محتوای مطلب دوم ...",
            img: '/04.webp'
        },
        {
            id: 4,
            title: "افکت اینستاگرام گزینه ی چپ یا راست",
            content: "محتوای مطلب دوم ...",
            img: '/04.webp'
        }
    ];
    const handleGridClick = () => {
        history.push(`/post/${'s'}`); // انتقال به مسیر مطلب با استفاده از history
    };

    return (
        <Grid container >
            {posts.map((post) => (
                <Grid
                    onClick={handleGridClick}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={post.id}
                    sx={{
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#271f2a7d',
                        borderRadius: 2,
                        justifyContent: 'space-between',
                        height: { md: '460px', xs: 'auto' },
                        transition: 'box-shadow 0.3s, color 0.3s',
                        border: "3px solid #0e0f11",
                        "&:hover": {
                            color: 'gray',
                            boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.5)',
                        },
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }}>
                        <img
                            src={post.img}
                            alt={post.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                            }}
                        />
                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800, mt: 2, lineHeight: '1.7em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {post.title}
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', textAlign: 'right', mt: 2 }}>
                        <Typography sx={{ color: '#fff' }}>{post.content}</Typography>
                        <Button
                            variant="contained"
                            sx={{ mt: 2, bgcolor: '#000', color: '#fff', borderRadius: '10px', width: '100%' }}
                        >
                            ادامه مطلب
                        </Button>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default BlogItem;
