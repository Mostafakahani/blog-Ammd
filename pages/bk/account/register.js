import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: ''
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
      const response = await axios.post('http://localhost:3001/api/data', formData);
      console.log(response.data);
      window.location.href = '/account/login';
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during registration. Please try again later.',
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <h5 className="text-center mb-4 fw-bold">ساخت حساب کاربری</h5>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input-form"
                placeholder="نام"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input-form"
                placeholder="نام خانوادگی"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-form"
                placeholder="ایمیل"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-form"
                placeholder="کلمه عبور"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input-form"
                placeholder="نام نمایشی"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn-register-acc">ساخت حساب</button>
            </div>
            <p className="text-center mt-3" style={{ cursor: 'pointer' }} onClick={() => (location.href = '/account/login')}>
              ورود به حساب کاربری
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
