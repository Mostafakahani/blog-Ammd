import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import styles from '../styles/page.module.css'
import HeaderStyle from '@/styles/header.module.css'
// import 'bootstrap/dist/css/bootstrap.css';
import imgLogo from '@/pages/imgs/logo1.png'
import Button from '@mui/material/Button';
// const inter = Inter({ subsets: ['latin'] })
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, ListItem as Item } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import imgTest from '@/pages/imgs/windows-1.png'
export default function Home() {
    const handleservtest = () => {
        alert('در دسترس نمی باشد.');
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <Grid container spacing={1} xs={12} sm={12} sx={{ backgroundColor: '#0A1929', borderRadius: '10px' }}>
                    <Grid item sx={{ alignItems: 'center' }}>
                        <Button href={'#'}>
                            <Item>
                                Home
                            </Item>
                        </Button>
                    </Grid>
                    <Grid item >
                        <Button href={'#'}>
                            <Item>
                                About
                            </Item>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button href={'#'}>
                            <Item>
                                Download
                            </Item>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Container fixed sx={{ textAlign: 'center', alignItems: 'center', color: '#fff' }}>
                <Box sx={{ bgcolor: '#0A1929', height: '100vh' }}>
                    <Grid container >
                        <Grid item xs={6} md={8} sx={{ bgcolor: 'red' }}>
                            <Item sx={{ textAlign: 'right' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi                             </Item>
                        </Grid>
                        <Grid item xs={6} md={4} >
                            <Image width={200} height={80} src={imgTest} />
                        </Grid>
                        <Grid item xs={6} md={4} >
                            <Image width={200} height={80} src={imgTest} />
                        </Grid>
                        <Grid item xs={6} md={8} sx={{ bgcolor: 'red' }}>
                            <Item sx={{ textAlign: 'right' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi                             </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>



        </>
    )
}
