import React, { useState, useEffect } from 'react';
import { Button, Card } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { ButtonBase, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const sliderStyles = {
    root: {
        margin: 'auto',
        overflow: 'hidden',
        position: 'relative', // اضافه کردن position برای قرار دادن دکمه‌ها
    },
    mediaContainer: {
        width: '100%',
    },
    media: {
        width: '100%',
        height: 'auto',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 16,
        position: 'absolute', // اضافه کردن position برای دکمه‌ها
        left: 0, // قرار دادن دکمه‌ها در چپ
        right: 0, // قرار دادن دکمه‌ها در راست
        bottom: 25, // قرار دادن دکمه‌ها در پایین
    },
    button: {
        backgroundColor: '#ffffff10',
        color: '#000',
        padding: '5px',
        margin: '0px 15px 0px 15px'
        ,
        border: 'none',
        cursor: 'pointer',
        borderRadius: '50%',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        fontWeight: 'bold',
    },
};

const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Card style={sliderStyles.root}>
            <SwipeableViews
                index={currentSlide}
                onChangeIndex={setCurrentSlide}
                enableMouseEvents
            >
                {images.map((image, index) => (
                    <div key={index} style={{ ...sliderStyles.mediaContainer }}>
                        <img
                            style={{ ...sliderStyles.media, width: '100%' }}
                            src={image.url}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </SwipeableViews>
            <div style={sliderStyles.buttonContainer}>
                <ButtonBase sx={sliderStyles.button} onClick={handlePrevious}>
                    <ArrowForwardIosIcon />
                </ButtonBase>
                <ButtonBase sx={sliderStyles.button} onClick={handleNext}>
                    <ArrowBackIosNewIcon />
                </ButtonBase>
            </div>
        </Card>
    );
};

export default Slideshow;
