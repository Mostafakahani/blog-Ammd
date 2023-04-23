import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import Chip from '@mui/material/Chip';

import { Inter } from 'next/font/google'
import Link from "next/link";
import styles from '../styles/page.module.css'
import HeaderStyle from '@/styles/header.module.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import imgLogo from '@/pages/imgs/logo1.png'
import Button from '@mui/material/Button';
// const inter = Inter({ subsets: ['latin'] })
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, ListItem as Item } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ImgLogo from '@/pages/imgs/photo.jpeg'
export default function Home() {
    const handleservtest = () => {
        alert('در دسترس نمی باشد.');
    }
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));


    return (
        <>
            <CssBaseline />
            
            <Container container sx={{ bgcolor: '#1A0B2E', textAlign: 'center' }}>
                <Grid>
                    <Grid mt={5} style={{ color: '#fff' }}>
                        <Stack direction="row" justifyContent='center'>
                            <Avatar sx={{ width: 150, height: 150 }} src={ImgLogo.src} />
                        </Stack>
                        {/* <Image className='img' width={150} height={150} src={ImgLogo} alt='logo' /> */}
                        <Grid mt={3} >
                            <h1 style={{ fontWeight: "800" }}>Mostafa Kahani</h1>
                        </Grid>
                        <Grid>
                            <h5>
                                <span style={{ color: 'yellow', fontWeight: "500" }}>
                                    Nothing
                                </span>
                                &nbsp;
                                Developer</h5>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Container container >
                <Stack direction="row" container spacing={2} mt={2} justifyContent='center' sx={{ color: "#fff" }}>
                    <Button sx={{
                        ":hover": {
                            bgcolor: "#1976d280",
                            color: "white"
                        }
                    }} variant="outlined" color="primary" href='#'><TelegramIcon />
                    </Button>
                    <Button variant="outlined" sx={{
                        ":hover": {
                            bgcolor: "#9c27b080",
                            color: "white"
                        }
                    }} color="secondary" href='#'>
                        <InstagramIcon />
                    </Button>
                    <Button sx={{
                        ":hover": {
                            bgcolor: "#2e7d3280",
                            color: "white"
                        }
                    }} variant="outlined" color="success" href='#'>
                        <GitHubIcon />
                    </Button>
                </Stack>
            </Container>
            {/* 
            <Container container="true">
                <Grid mt={3} container spacing={1} columns={16} justifyContent='center' textAlign='center'>
                    <Grid item sm={2} xs={12}>
                        <Button sx={{
                            ":hover": {
                                bgcolor: "#1976d280",
                                color: "white"
                            }
                        }} variant="outlined" color="primary" startIcon={<TelegramIcon />} href='#'>
                            Telegram
                        </Button>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <Button sx={{
                            ":hover": {
                                bgcolor: "#2e7d3280",
                                color: "white"
                            }
                        }} variant="outlined" color="success" startIcon={<GitHubIcon />} href='#'>
                            GitHub
                        </Button>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <Button variant="outlined" sx={{
                            ":hover": {
                                bgcolor: "#9c27b080",
                                color: "white"
                            }
                        }} color="secondary" startIcon={<InstagramIcon />} href='#'>
                            Instagram
                        </Button>
                    </Grid>
                </Grid>
            </Container> */}
            <br />
            <br />
            <Container container spacing={2} >
                <Grid container="true" columns={16} textAlign='center' sx={{ bgcolor: '#11071F', textAlign: 'center', color: '#fff' }}>
                    <Grid sm={8} xs={16} alignItems='center' textAlign='center'>
                        <Image className='img' width={150} height={150} src={ImgLogo.src} alt='logo'></Image>

                    </Grid>
                    <Grid sm={8} xs={16}>
                        <Paper elevation={0} sx={{ margin: '40px', textAlign: 'justify', bgcolor: '#fff0', color: '#fff' }} justifyContent='center' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                        bgcolor: '#fff0'
                    },
                }}
            >
                <Paper elevation={0} >s
                </Paper >
            </Box>



        </>
    )
}
