import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const ItemOption = () => {
    const courseData = [
        {
            imgUrl: '/icon2.svg',
            titel: 'سیر تا پیاز فتوشاپ',
            content: 'قرار تو این فصل از نصب فتوشاپ شروع میکنیم و به صورت کامل با تمامی بخش های فتوشاپ آشنا می‌شید.',
        },
        {
            imgUrl: '/icon2.svg',
            titel: 'آموزش تئوری طراحی',
            content: 'تو این فصل با فرمول FOTC آشنا میشید که فقط با رعایت نکات این فرمول سطح طراحی تون از این رو به اون رو میشه.            ',
        },
        {
            imgUrl: '/icon2.svg',
            titel: 'آموزش پروژه محور',
            content: 'در این فصل به صورت پروژه محور بیش از 30 پروژه طراحی ثابت و متحرک باهم یاد میگیریم.',
        },
        {
            imgUrl: '/icon2.svg',
            titel: 'چالش درآمد زایی',
            content: 'قرار خودم بدون سایت یا پیج از صفر و با فتوشاپ به درآمد برسم و قدم به قدم باهم پیش بریم تا شمام به درآمد برسید.            ',
        },
    ];

    return (
        <Grid container spacing={2} sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowarp',
            width: '100%'
        }}>
            {courseData.map((item, index) => (
                <Grid
                    item
                    xs={12}
                    sm={5.5}
                    md={2.5}
                    key={index}
                    sx={{
                        backgroundColor: '#271F2A',
                        borderRadius: 2,
                        padding: 2,
                        margin: '5px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box component='img' src={item.imgUrl} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                        {item.titel}
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: 'white',
                        fontSize: '13px',
                        display: ' flex',
                        flexWrap: 'nowrap',
                        maxWidth: ' 100%',
                        maxHeight: ' 100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {item.content}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemOption;
