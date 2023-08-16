import { Box, Container, Grid, Input, Paper, TextField, Typography, styled } from '@mui/material';
import LineItemRed from './LineItemRed';

const OptionItemTwo = () => {
    // const OptionsList = [
    //     { urlImg: '/icon.svg', text: '8 سال سابقه کار', caption: "8 years of work experience" },
    //     { urlImg: '/icon.svg', text: 'برگزاری دوره ها', caption: "1300 successful students" },
    //     { urlImg: '/icon.svg', text: ' فایل های رایگان', caption: "10 training courses" },
    //     { urlImg: '/icon.svg', text: 'خرید تحت وب', caption: "years of work experience" },
    // ];
    const optionsList = [
        {
            english: '8 years of work experience',
            persian: '8 سال سابقه کار',
        },
        {
            english: 'Moving Design with Photoshop',
            persian: 'طراحی با فتوشاپ',
        },
        {
            english: '1300 successful students',
            persian: '1300 دانشجوی موفق',
        },
        {
            english: '10 training courses',
            persian: 'برگزاری ده دوره آموزشی',
        },
    ];

    return (
        <>
            <Grid container spacing={2} sx={{ textAlign: 'center', justifyContent: 'center' }}>
                {optionsList.map((option, index) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                flexDirection: 'column',
                                backgroundColor: 'hsla(0, 0%, 100%, .03)',
                                marginTop: '10px',
                                justifyItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                height: '100px'

                            }}
                        >
                            <Box component='img'
                                sx={{
                                    position: 'relative',
                                    bottom: '10px',
                                }}
                                src={'/icon.svg'} alt={`Icon ${index}`} />
                            <Box textAlign="center"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',

                                }}>
                                <Typography
                                    color='white'
                                    fontWeight={600}
                                    sx={{
                                        fontFamily: 'Allison,sans-serif!important',
                                        backgroundImage: 'linear-gradient(to bottom, #fd346ee8 10%, #ffffff00 100%)',
                                        WebkitBackgroundClip: 'text',
                                        userSelect: 'none',
                                        MozUserSelect: 'none',
                                        WebkitUserSelect: 'none',
                                        color: 'transparent',
                                        fontSize: { md: 24, xs: 15 },
                                        marginTop: '0px',
                                        position: 'relative',
                                        bottom: '10px',

                                    }}

                                >{option.english}</Typography>
                                <Typography color='white'
                                    sx={{
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        position: 'relative',
                                        bottom: '25px',
                                    }}

                                >{option.persian}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <LineItemRed
                persianText={'مسیر یادگیری دوره'}
                englishText={'The course of learning the course'}
            />
            <Typography
                sx={{
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: { sm: '-100px', xs: '-50px' }
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

export default OptionItemTwo;
