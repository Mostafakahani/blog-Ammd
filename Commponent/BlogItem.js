import { Box, Container, Grid, Typography } from "@mui/material";

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
            id: 1,
            title: "نمونه پروپوزال طراحی سایت",
            content: "محتوای مطلب اول ...",
            img: '/03.webp'
        },
        {
            id: 2,
            title: "افکت اینستاگرام گزینه ی چپ یا راست",
            content: "محتوای مطلب دوم ...",
            img: '/04.webp'
        }
    ];

    return (
        <Grid container sx={{
            maxWidth: '100%',

        }}>
            {posts.map((post) => (
                <Grid
                    
                    xs={12}
                    sm={6}
                    md={4}
                    key={post.id}
                    sx={{
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#271f2a7d',
                        borderRadius: 2,
                        margin: '5px',
                        justifyContent: 'center',
                        "&:hover": {
                            color: 'gray',
                            boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.5)',
                        },
                    }}
                >
                    <Box
                        component='img'
                        src={post.img}
                        alt={post.title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                        }}
                    />
                    <Box sx={{
                        width: '100%',
                        textAlign: 'right',
                    }}>
                        <Typography sx={{
                            color: '#fff',
                            fontWeight: 800,
                            fontSize: '20px',
                            mt: 2,
                            lineHeight: '1.7em',
                            textOverflow: 'ellipsis',
                            fontWeight: 'normal',
                            padding: '0 5px',
                            overflowWrap: 'normal',
                            margin: '10px 0px',
                        }}>
                            {post.title}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            my: 3,
                        }}>
                            <Typography sx={{ color: '#fff', mt: 1 }}>{post.content}</Typography>
                            <Box
                                component='button'
                                sx={{
                                    width: '100px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    backgroundColor: '#000',
                                    color: '#fff',
                                }}
                            >
                                Button
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};


export default BlogItem;
