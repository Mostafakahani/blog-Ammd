import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login1 ', formData);
      console.log(response.data);
      window.location.href = '/protected';



    } catch (error) {
      console.error('Error:', error);
      // پردازش خطا و نمایش پوش‌نوتیفیکیشن با استفاده از SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'داداش اشتباه زدی سوتونم.',
      });
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center" style={{ textAlign: 'center' }}>
        <form className="row flex-column" style={{ width: '30%' }} onSubmit={handleSubmit}>
          <h5 style={{ fontWeight: '900' }}>ورود به حساب کاربری</h5>
          <input
            className='col'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="نام کاربری"
          />
          <input
            className='col'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="رمز عبور"
          />
          <button href="#">ورود</button>
          <p style={{ cursor: 'pointer' }} onClick={() => location.href = '/account/register'}>ساخت حساب کاربری</p>

        </form>
      </div>
    </>
  )
}
