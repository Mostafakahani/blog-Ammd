import { Box, Container, Grid, Input, TextField, Typography, styled } from '@mui/material';
const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: 'hsla(0,0%,100%,.03)',
    color: '#fff',
    padding: theme.spacing(5),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing(2),
}));

const StyledItemGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '100%',
    border: `1px solid ${theme.palette.grey[200]}7a`,
    borderStyle: 'dashed',
    borderBottomWidth: '2px',
    borderTopWidth: '0px',
    borderLeftWidth: '0px',
    borderRightWidth: '0px',
    my: theme.spacing(2),
}));

const IconBox = styled('img')({
    marginLeft: 20,
});

const RedBox = styled('img')({
    marginRight: 20,
});
const data = [
    {
        title: 'مدرس دوره :',
        content: 'حسین ملک زاده',
        iconSrc: '/icon03.svg',
    },
    {
        title: 'زمان حدودی',
        content: '544 ساعت',
        iconSrc: '/icon03.svg',
    },
    {
        title: 'سطح آموزش :',
        content: 'مقدماتی تا پیشرفته',
        iconSrc: '/icon03.svg',
    },
    {
        title: 'سطح آموزش :',
        content: 'مقدماتی تا پیشرفته',
        iconSrc: '/icon03.svg',
    },
    {
        title: 'سطح آموزش :',
        content: 'مقدماتی تا پیشرفته',
        iconSrc: '/icon03.svg',
    },
];
const AboutItems = () => {
    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }} >
            <StyledGrid item xs={12} md={5.95}>
                <Grid container sx={{
                    backgroundColor: 'hsla(0,0%,100%,.03)',
                    color: '#fff',
                    padding: 5,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                }}>
                    <Box component='img' src='/page.jpg' maxWidth='100%' height='auto' borderRadius='50px' />

                </Grid>
            </StyledGrid>
            <StyledGrid item xs={12} md={5.95} sx={{ mt: { xs: '10px', md: '0px', sm: '0px' } }}>
                {data.map((item, index) => (
                    <StyledItemGrid key={index} item xs={12} md={6}>
                        <Typography
                            variant="p"
                            sx={{ fontWeight: 200, color: '#fff', textAlign: 'center', mb: 2, mt: 2 }}
                        >
                            <IconBox src={item.iconSrc} alt="icon" width={24} height={24} />
                            {item.title}
                        </Typography>
                        <Typography variant="p" sx={{ fontWeight: 200, color: '#fff', textAlign: 'center', mb: 2, mt: 2 }}>
                            {item.content}
                            <RedBox src="/red.svg" />
                        </Typography>
                    </StyledItemGrid>
                ))}
            </StyledGrid>
        </Grid >
    );
};
export default AboutItems;