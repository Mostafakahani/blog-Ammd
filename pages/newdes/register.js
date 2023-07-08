// pages/register.js (بخش فرانت‌اند)
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // درخواست ثبت نام به بک‌اند
      const response = await axios.post('http://localhost:3002/register', {
        username,
        password,
        fullName,
        email
      });

      console.log(response.data);
      // ادامه فرایند ثبت نام
    } catch (error) {
      console.error(error.response.data);
      // پیغام خطا در صورت وجود
    }
  };

  return (
    <form onSubmit={handleRegister}>
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
      <input
        type="text"
        placeholder="نام کامل"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="ایمیل"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">ثبت نام</button>
    </form>
  );
};

export default Register;
