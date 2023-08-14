import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Menu, Toolbar, Tooltip, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import { MenuItem } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';

const NavBar = () => {

    const pages = ['محصولات', 'افزودن', 'وبلاگ', 'نویسندگان'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [status, setStatus] = useState(true)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const StyledFab = styled(Fab)({
        position: 'related',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });
    return (
        <>
            <Container maxWidth="true" sx={{ border: 'solid 1px #252525' }} >
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                            marginLeft: '20px'
                        }}
                    >
                        LOGO

                    </Typography>
                    {/* <Box sx={{ flexGrow: 1, display: { xs: '    flex', md: 'none' }, border: '1px solid red' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        // onClick={handleOpenNavMenu} // این تغییر اضافه شده است

                        > */}
                    {/* ss
                        </IconButton> */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}

                    </Menu>

                    {/* </Box> */}

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'start',
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {/* Avatar */}
                    {
                        status ? (
                            <>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </>
                        ) : (
                            console.log('error')
                        )
                    }


                </Toolbar>
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, display: { xs: 'flex', md: 'none' } }}>
                    <Toolbar>
                        {/* <IconButton color="inherit" aria-label="open drawer" onClick={handleOpenNavMenu}>
                            <MenuIcon />
                        </IconButton> */}
                        <StyledFab color="secondary" aria-label="open drawer" onClick={handleOpenNavMenu}>
                            <MenuIcon />
                        </StyledFab>
                        <Box sx={{ flexGrow: 1 }} />
                        {/* <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton> */}
                    </Toolbar>
                </AppBar>



            </Container>
        </>
    )

}
export default NavBar;