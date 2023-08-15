import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LineItemRed = (props) => {
    const theme = useTheme();

    return (
        <Box>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: { md: 20, xs: 12 },
                    fontFamily: 'Yekan Bakh !important',
                    fontWeight: 600,
                    color: 'white',
                    my: 3,
                    position: 'relative',
                    zIndex: 5,
                }}
            >
                {props.persianText}
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Allison, sans-serif !important',
                    fontSize: { md: 50, xs: 35 },
                    fontWeight: 600,
                    color: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    m: 0,
                    p: 0,
                    WebkitBackgroundClip: 'text',
                    backgroundImage: 'linear-gradient(to bottom, white, #171721)',
                    position: 'relative',
                    top: '-125px',
                    zIndex: 2,
                    userSelect: 'none',
                    MozUserSelect: 'none',
                    WebkitUserSelect: 'none',
                }}
            >
                {props.englishText}
            </Typography>
            <Grid
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
                <hr
                    style={{
                        width: '50%',
                        color: 'red',
                        textAlign: 'center',
                        boxShadow: '#ff000087 0px 6px 20px 12px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        [theme.breakpoints.only('xs')]: {
                            width: '100%',
                            top: '-100px',
                        },
                    }}
                />
                <hr
                    style={{
                        width: '50%',
                        color: 'red',
                        textAlign: 'center',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        [theme.breakpoints.only('xs')]: {
                            width: '100%',
                            top: '-100px',
                        },
                    }}
                />
            </Grid>
        </Box>
    );
};

export default LineItemRed;
