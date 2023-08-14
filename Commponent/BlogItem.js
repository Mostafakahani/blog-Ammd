import { Box, Grid, Typography } from "@mui/material";

const BlogItem = () => {

    const posts = [
        {
            id: 1,
            title: "عنوان مطلب اول",
            content: "محتوای مطلب اول ...",
            img: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/98d0c52c68daa732ea2a34b345fec80322654476_1690974366.jpg'
        },

        // {
        //     id: 2,
        //     title: "عنوان مطلب دوم",
        //     content: "محتوای مطلب دوم ...",
        //     img: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/b7ce26b91a2ec80e633bf9cf7fdfc527f451ac7a_1690898814.jpg'
        // }
    ];


    return (
        <>
            <Grid>
                {
                    posts.map((post, index) => (
                        <>
                            <Box sx={{
                                border: '1px solid black',
                                borderRadius: '10px',
                                padding: '10px',
                                margin: '10px',
                                width: '100%',
                                height: '100%',
                                "&:hover": {
                                    color: 'gray',
                                    backgroundColor: 'lightblue',
                                    boxShadow: 6
                                },
                            }}>
                                <Box
                                    component='img'
                                    src={post.img}
                                    sx={{
                                        width: '100%',
                                        borderRadius: '10px',
                                    }}
                                />
                                <Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl>
                                        <Typography fontWeight='800' fontSize='25px'>{post.title}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl>
                                        <Typography>{post.content}</Typography>
                                    </Grid>
                                </Grid>
                            </Box>

                        </>
                    ))
                }
            </Grid>


        </>
    )
}
export default BlogItem;