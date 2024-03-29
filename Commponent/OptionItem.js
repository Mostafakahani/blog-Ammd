import { Box, Container, Grid, Input, Paper, TextField, Typography, styled } from '@mui/material';
import LineItemRed from './LineItemRed';

const StyledGridItem = styled(Grid)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#252525', // تغییر رنگ پس زمینه
    borderRadius: '5px', // تغییر شکل گوشه‌ها
    boxShadow: '0 0.02rem 0.04rem rgba(0,0,0,0.1), 0 0.07rem 0.2rem rgba(0,0,0,0.1)', '&:hover': {
        transition: '.5s',
        boxShadow: '0px 3px 11px 0px #71717140'
    },
    padding: theme.spacing(2),
    transitionDuration: '0.3s', // تغییر مدت زمان افکت ترانزیشن
}));

const itemDes = {
    fontFamily: 'Allison, sans-serif !important',
    textAlign: 'center',
    variant: 'span',
    fontSize: { md: 24, xs: 15 },
    textAlign: 'center',
    fontWeight: 600,
    color: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    // mb: 3,
    position: 'relative',
    // top: '50%',
    // left: '50%',
    transform: 'translate(-50%, -50%)',
    WebkitBackgroundClip: 'text',
    backgroundImage: 'linear-gradient(to bottom, white, #171721)',
    zIndex: 1,
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
};

const StyledImage = styled('img')({
    position: 'relative',


});

const OptionItem = () => {
    const OptionsList = [
        { urlImg: '/icon.svg', text: '8 سال سابقه کار', caption: "8 years of work experience" },
        { urlImg: '/icon.svg', text: 'برگزاری دوره ها', caption: "1300 successful students" },
        { urlImg: '/icon.svg', text: ' فایل های رایگان', caption: "10 training courses" },
        { urlImg: '/icon.svg', text: 'خرید تحت وب', caption: "years of work experience" },
    ];
    const itemOne = {
        ...itemDes,
        top: '40px',
        // left: '500px',
        right: '-90px',
        bottom: '0px',
        marginTop: '-20px',
        WebkitBackgroundClip: 'text',
        backgroundImage: 'linear-gradient(to bottom, #fd346ee8 10%, #ffffff00 100%)',
    };
    const itemTwo = {
        ...itemOne,
        top: '40px',
        // left: '500px',
        right: '-70px',
        bottom: '0px',
        marginTop: '-20px',
        WebkitBackgroundClip: 'text',
        backgroundImage: 'linear-gradient(to bottom, #fd346ee8 10%, #ffffff00 100%)',
    };
    const itemThree = {
        ...itemOne,
        top: '40px',
        // left: '500px',
        right: '-80px',
        bottom: '0px',
        marginTop: '-20px',
        WebkitBackgroundClip: 'text',
        backgroundImage: 'linear-gradient(to bottom, #fd346ee8 10%, #ffffff00 100%)',
    };
    const itemFour = {
        ...itemOne,
        top: '40px',
        // left: '500px',
        right: '-87px',
        bottom: '0px',
        marginTop: '-20px',
        WebkitBackgroundClip: 'text',
        backgroundImage: 'linear-gradient(to bottom, #fd346ee8 10%, #ffffff00 100%)',
    };

    return (
        <>
            {/* #5D00D0 */}
            {/* <Container container="true"> */}




            <Grid container spacing={{ xs: 2, md: 3 }} sx={{
                textAlign: 'center', justifyContent: 'center',
                marginTop: { md: '0px', sm: '-50px', xs: '-60px' }
            }}>
                {/* {OptionsList.map((x, index) => ( */}
                <Grid item xs={12} sm={6} md={3}>
                    <StyledGridItem sx={{
                        justifyContent: { xs: 'space-evenly', sm: 'space-evenly' },
                        flexDirection: 'column',
                        backgroundColor: 'hsla(0,0%,100%,.03)',

                    }}>
                        <StyledImage src={'/icon.svg'} />
                        <Box textAlign="center">
                            <Typography sx={itemTwo}>8 years of work experience</Typography>
                            <Typography textAlign='center' color='white' fontSize={{ md: 18, xs: 11, sm: 11 }} overflow='hidden' fontWeight='600'>8 سال سابقه کار</Typography>
                        </Box>
                    </StyledGridItem>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StyledGridItem sx={{
                        justifyContent: { xs: 'space-evenly', sm: 'space-evenly' },
                        flexDirection: 'column',
                        backgroundColor: 'hsla(0,0%,100%,.03)'
                    }}>
                        <StyledImage src={'/icon.svg'} />
                        <Box textAlign="center">
                            <Typography sx={itemOne}>Moving Design with Photoshop</Typography>
                            <Typography textAlign='center' color='white' fontSize={{ md: 18, xs: 11, sm: 11 }} overflow='hidden' fontWeight='600'>طراحی با فتوشاپ</Typography>
                        </Box>
                    </StyledGridItem>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StyledGridItem sx={{
                        justifyContent: { xs: 'space-evenly', sm: 'space-evenly' },
                        flexDirection: 'column',
                        backgroundColor: 'hsla(0,0%,100%,.03)'
                    }}>
                        <StyledImage src={'/icon.svg'} />
                        <Box textAlign="center">
                            <Typography sx={itemThree}>1300 successful students</Typography>
                            <Typography textAlign='center' color='white' fontSize={{ md: 18, xs: 11, sm: 11 }} overflow='hidden' fontWeight='600'>1300 دانشجوی موفق</Typography>
                        </Box>
                    </StyledGridItem>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StyledGridItem sx={{
                        justifyContent: { xs: 'space-evenly', sm: 'space-evenly' },
                        flexDirection: 'column',
                        backgroundColor: 'hsla(0,0%,100%,.03)'
                    }}>
                        <StyledImage src={'/icon.svg'} />
                        <Box textAlign="center">
                            <Typography sx={itemFour}>10 training courses</Typography>
                            <Typography textAlign='center' color='white' fontSize={{ md: 18, xs: 11, sm: 11 }} overflow='hidden' fontWeight='600'>برگزاری ده دوره آموزشی</Typography>
                        </Box>
                    </StyledGridItem>
                </Grid>

                {/* ))} */}
            </Grid>
            <LineItemRed
                persianText={'مسیر یادگیری دوره'}
                englishText={'The course of learning the course'}
            />
            <Typography 
            sx={{
                color: '#fff',
                textAlign: 'center',
                marginTop: {sm: '-100px', xs: '-50px'}
            }}>
                آموزش های دوره اینستاگراف به دو دسته ثابت و متحرک تقسیم میشود , نمونه ثابت همون عکس نوشته هایی هستش که قطعا تو خیلی از پیج ها دیدید، ولی ما برای اولین تو ایران طراحی متحرک بدون نیاز به افترافکت یا بلندر بهتون آموزش دادیم که میتونید نمونه جلسات دوره را پایین همین صفحه ببینید
            </Typography>




            <LineItemRed
                persianText={'برای دیدن سوالات تصادفی جدیدتر می‌توانید صفحه را رفرش کنید!'}
                englishText={'Sample projects carried out in the course'}
            />
            {/* </Container> */}
        </>
    );
};

export default OptionItem;
