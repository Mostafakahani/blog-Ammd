import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ارسال درخواست به سمت سرور
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });

      // دریافت توکن از پاسخ سرور
      const { token } = response.data;

      // ذخیره توکن در localStorage یا در جای دیگر
      localStorage.setItem('token', token);

      // ریدایرکت به صفحه مورد نظر
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error:', error);

      // پردازش خطا و نمایش پوش‌نوتیفیکیشن با استفاده از SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during login. Please try again later.',
      });
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div className="container d-flex justify-content-center" style={{ textAlign: 'center' }}>

        <form className="row flex-column" style={{ width: '30%' }} onSubmit={handleSubmit}>
          <h5 style={{ fontWeight: '900' }}>ورود به حساب کاربری</h5>

          <input
            className=' col'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="نام کاربری"

          />
          <input
            className=' col'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="کلمه عبور"

          />
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  );
};


export default Login;
