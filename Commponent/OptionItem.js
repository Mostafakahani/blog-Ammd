import { Box, Container, Grid, Input, TextField, Typography, styled } from '@mui/material';

const StyledGridItem = styled(Grid)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff', // تغییر رنگ پس زمینه
    borderRadius: '5px', // تغییر شکل گوشه‌ها
    boxShadow: '0 0.02rem 0.04rem rgba(0,0,0,0.1), 0 0.07rem 0.2rem rgba(0,0,0,0.1)', '&:hover': {
        transition: '.5s',
        boxShadow: '0px 3px 11px 0px #71717140'
    },
    padding: theme.spacing(2),
    transitionDuration: '0.3s', // تغییر مدت زمان افکت ترانزیشن
}));

const StyledImage = styled('img')({
    maxWidth: '20%',
    height: 'auto',
    marginBottom: '10px',
    marginLeft: '5px',
});

const OptionItem = () => {
    const OptionsList = [
        { urlImg: 'https://abzarwp.com/static/uploads/2021/08/support1.png', text: 'لود شدن سایتت خیلی طول می کشه؟', caption: "این یک کپشن هست" },
        { urlImg: 'https://abzarwp.com/static/uploads/2020/11/grids.png', text: 'لود شدن سایتت خیلی طول می کشه؟', caption: "این یک کپشن هست" },
        { urlImg: 'https://abzarwp.com/static/uploads/2022/03/password.png', text: 'لود شدن سایتت خیلی طول می کشه؟', caption: "این یک کپشن هست" },
        { urlImg: 'https://abzarwp.com/static/uploads/2022/01/advanced_field.png', text: 'لود شدن سایتت خیلی طول می کشه؟', caption: "این یک کپشن هست" },
    ];

    return (
        <>
            {/* <Container container="true"> */}
                <Typography textAlign='center' variant='span' fontSize={11} fontFamily='Yekan Bakh !important' color='#252525' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    my: 3
                }}>برای دیدن سوالات تصادفی جدیدتر می تونی صفحه رو رفرش کنی!</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} sx={{ textAlign: 'center', justifyContent: 'center' }}>
                    {OptionsList.map((x, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <StyledGridItem sx={{
                                justifyContent: { xs: 'space-evenly', sm: 'space-evenly' }
                            }}>
                                <Box textAlign="center">
                                    <Typography fontSize={{ md: 12, xs: 11, sm: 11 }} overflow='hidden' fontWeight='600'>{x.text}</Typography>
                                    <Typography fontFamily='Yekan Bakh !important' fontSize={11}>{x.caption}</Typography>
                                </Box>
                                <StyledImage src={x.urlImg} />
                            </StyledGridItem>
                        </Grid>
                    ))}
                </Grid>
            {/* </Container> */}
        </>
    );
};

export default OptionItem;
