import React from 'react';
import { Box, Container } from '@mui/material';

const Circles = () => {
    return (
        <Container maxWidth="true">
            <Box
            sx={{
                maxWidth: '100%',
                overflow: 'hidden',
            }}

            >
                {/* Right Circle */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '-10%', // دایره از سمت راست فاصله دارد
                        transform: 'translate(-50%, -50%)',
                        width: '235px',
                        height: '355px',
                        borderRadius: '50%',
                        backgroundColor: 'rgb(253 52 110)',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        filter: 'blur(220px)',
                        userSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                    }}
                />

                {/* Left Circle */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '20%', // دایره از سمت چپ فاصله دارد
                        transform: 'translate(-50%, -50%)',
                        width: '235px',
                        height: '355px',
                        borderRadius: '50%',
                        backgroundColor: 'rgb(93 0 208)',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        filter: 'blur(220px)',
                        userSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        color: 'white',
                    }}

                />

            </Box>
        </Container>
    );
};

export default Circles;
