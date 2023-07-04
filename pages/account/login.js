// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useState } from 'react';
// // import {} from '@/pages/api/routes/auth'
// export default function Login() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     try {
//       const response = await axios.post('http://localhost:3001/api/routes/auth', formData);
//       console.log(response.data);
//       window.location.href = 'http://localhost:3001/api/protected';
//     } catch (error) {
//       console.error('Error:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'خطایی رخ داده است. لطفاً مجدداً تلاش کنید.',
//       });
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-sm-6">
//           <form onSubmit={handleSubmit}>
//             <h5 className="text-center mb-4 fw-bold">ورود به حساب کاربری</h5>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="input-form"
//                 placeholder="نام کاربری"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="input-form"
//                 placeholder="رمز عبور"
//               />
//             </div>
//             <div className="text-center">
//               <button type="submit" className="btn-login-acc">ورود</button>
//             </div>
//             <p className="text-center mt-3" style={{ cursor: 'pointer' }} onClick={() => (location.href = '/account/register')}>
//               ساخت حساب کاربری
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


// 

import { useState } from 'react';

const LoginPage = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ارسال درخواست به سرور بک‌اند برای ورود کاربر
    const response = await fetch('http://localhost:3001/api/routes/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
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
          type="text"
          id="email"
          value={username}
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
