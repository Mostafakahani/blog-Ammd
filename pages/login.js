import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ارسال درخواست به سرور بک‌اند برای ورود کاربر
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      const { token } = data;
      // ذخیره توکن در localStorage یا در مکان دیگری که می‌خواهید
      localStorage.setItem('token', token);
      
      // انتقال به صفحه کاربری
      window.location.href = '/user';
    } else {
      console.error('خطا در ورود:', data.error);
      alert('ورود ناموفق. لطفاً اطلاعات صحیح را وارد کنید.');
    }
  };

  return (
    <div>
      <h1>صفحه ورود</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">ایمیل:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">رمز عبور:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">ورود</button>
      </form>
    </div>
  );
};

export default LoginPage;
