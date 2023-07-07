// pages/index.js (بخش فرانت‌اند)
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // درخواست لاگین به بک‌اند
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password
      });

      console.log(response.data);
      // ادامه فرایند لاگین
    } catch (error) {
      console.error(error.response.data);
      // پیغام خطا در صورت وجود
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
    </form>
  );
};

export default Login;
