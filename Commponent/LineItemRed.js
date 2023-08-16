import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-0.2rem',
            left: 0,
            width: 'auto',
            height: '0.1rem',
            backgroundColor: 'red ',
        },
    },
}));

const LineItemRed = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    // const ref = React.useRef(null);
    // const [width, setWidth] = React.useState('');
    // React.useEffect(() => {
    //     if (ref.current) {
    //         setWidth(ref.current.getBoundingClientRect().width );
    //     }
    // }, [props.text]);
    // console.log(ref.current.getBoundingClientRect().width)
    return (
        <Box mt={10} sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <Typography
                // ref={ref}
                className={classes.root}
                sx={{

                    textAlign: 'center',
                    fontSize: { md: 20, sm: 15, xs: 12 },
                    fontFamily: 'Yekan Bakh !important',
                    fontWeight: 600,
                    color: 'white',
                    my: 3,
                    position: 'relative',
                    zIndex: 10,
                    width: 'max-content'
                }}
            >
                {props.persianText}
                <Box
                    component='span'
                    sx={{
                        width: '100%',
                        height: '0.1rem',
                        backgroundColor: 'rgb(253 52 110) ',
                        display: 'block',
                        position: 'relative',
                        bottom: '-0.2rem',
                        left: 0,
                        boxShadow: '0px 3px 10px 1px #fd3463',

                    }}
                />
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Allison, sans-serif !important',
                    fontSize: { md: 50, sm: 45, xs: 35 },
                    fontWeight: 600,
                    color: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    m: 0,
                    p: 0,
                    WebkitBackgroundClip: 'text',
                    backgroundImage: 'linear-gradient(to bottom, white, #171721)',
                    position: 'relative',
                    top: { md: '-125px', sm: '-102px', xs: '-85px' },
                    zIndex: 1,
                    userSelect: 'none',
                    MozUserSelect: 'none',
                    WebkitUserSelect: 'none',
                }}
            >
                {props.englishText}
            </Typography>
            {/* <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                sx={{
                    mt: { md: '-140px', xs: '0px' },
                    mb: '60px',
                    position: 'relative',
                }}
            >
                <Grid // Top Line
                    sx={{
                        width: { md: '50%', sm: '70%', xs: '70%' },
                        color: 'red',
                        textAlign: 'center',
                        boxShadow: 'rgba(255, 0, 0, 0.53) 0px 0px 0px 1px',
                        position: 'absolute',
                        top: { md: '10px', sm: '-112px', xs: '-90px' },
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '1px',
                        zIndex: '5'
                    }}
                />
                <Grid //Down Line
                    sx={{
                        width: { md: '50%', sm: '70%', xs: '70%' },
                        color: 'red',
                        textAlign: 'center',
                        boxShadow: 'rgba(255, 0, 0, 0.53) 0px 10px 20px 7px',
                        position: 'absolute',
                        top: { md: '10px', sm: '-112px', xs: '-90px' },
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '1px',
                        zIndex: '2'
                    }}
                />
            </Grid> */}
            {/* <Grid>
                <Typography
                    ref={ref}
                    className={classes.root}
                    variant="h6"
                    color="secondary"
                    style={{ width: 'max-content' }}
                >
                    {props.text}
                    <Box
                        component='span'
                        sx={{
                            width,
                            height: '0.1rem',
                            backgroundColor: 'red ',
                            display: 'block',
                            position: 'relative',
                            bottom: '-0.2rem',
                            left: 0,
                        }}
                    />
                </Typography>
            </Grid> */}
        </Box>
    );
};

export default LineItemRed;
