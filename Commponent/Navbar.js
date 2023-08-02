import { AppBar, Box, Button, Container, Grid, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import { MenuItem } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    const pages = ['محصولات', 'افزودن', 'وبلاگ'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
    return (

        <>
            <Container container="true" sx={{ border: 'solid 1px #252525' }} >
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
                            color: 'inherit',
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
                                sx={{ my: 2, color: '#252525', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, display: { xs: 'flex', md: 'none' } }}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" onClick={handleOpenNavMenu}>
                            <MenuIcon />
                        </IconButton>
                        {/* <StyledFab color="secondary" aria-label="add">
                            <AddIcon />
                        </StyledFab> */}
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