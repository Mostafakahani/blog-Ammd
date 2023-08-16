import { Box, Button, Container, Grid, Input, TextField, Typography, styled } from '@mui/material';


const NavLink = styled(Box)(({ theme }) => ({
    marginRight: theme.spacing(2),
    color: '#fff',
    textDecoration: 'none',
}));
const Navbar2 = () => {
    const data = [
        { label: 'خرید دوره', href: '#' },
        { label: 'نمونه پروژه جدید', href: '#' },
        { label: 'درباره دوره', href: '#' },
        { label: 'سرفصل ها', href: '#' },
    ];

    return (
        <>
            <Container container={true} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item>
                    {data.map((item, index) => (
                        <NavLink key={index} component="a" href={item.href}>
                            {item.label}
                        </NavLink>
                    ))}
                </Grid>
                <Grid item>
                    <Button href="#">نمونه پروژه جدید</Button>
                </Grid>
            </Container>

        </>
    )
}
export default Navbar2;