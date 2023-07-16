import axios from 'axios';
import { useState } from 'react';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

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
      window.location.href = '/dashboard';
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

export default Login();