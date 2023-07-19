import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3002/register', {
        username,
        password,
        email
      });

      // ثبت نام موفقیت‌آمیز بود
      console.log(response.data.message);
      // انجام تغییرات مربوط به صفحه مثلاً انتقال به صفحه ورود
    } catch (error) {
      // خطا در ثبت نام
      console.error('Error during registration:', error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>ثبت نام</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input type="text" placeholder="نام کاربری" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="email" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleRegister}>ثبت نام</button>
    </div>
  );
};

export default RegisterPage;
