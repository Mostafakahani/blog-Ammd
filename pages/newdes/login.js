import NavBar from '@/Commponent/Navbar';
import { Box, Container, Grid, Input, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('ok')

    try {
      // درخواست لاگین به بک‌اند
      const response = await axios.post('http://localhost:3002/login', {
        username,
        password
      });

      const { token } = response.data;

      // ذخیره توکن در localStorage
      localStorage.setItem('token', token);

      // ریدایرکت به داشبورد
      window.location.href = '/newdes/dashbord';
    } catch (error) {
      console.error(error.response.data);
      // پیغام خطا در صورت وجود
    }
  };

  return (
    <>
      {/* <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ورود</button>
      </form> */}
      <NavBar />

      <Container container="true" sx={{ border: 'solid 1px blue' }} rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container sx={{ border: 'solid 1px green', display: 'flex', justifyContent: 'center', marginTop: '20%' }} spacing={0} >
          <Grid sx={{ border: 'solid 1px red', textAlign: 'center', margin: '50px', }} xs={6} md={4} >
            <Typography>Test</Typography>
          </Grid>
        </Grid>

      </Container>


    </>
  );
};
