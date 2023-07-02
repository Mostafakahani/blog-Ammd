// import '@/styles/login.module.css'
import axios from 'axios';
import Swal from 'sweetalert2';

import { useState } from "react";

export default function Register() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',

    });


    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const response = await axios.post('http://localhost:3001/api/data', formData);
        //     console.log(response.data);
        // } catch (error) {
        //     console.error('Error submitting data:', error);
        // }
        // // پردازش خطا و نمایش پوش‌نوتیفیکیشن با استفاده از SweetAlert2
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Error',
        //     text: 'An error occurred during login. Please try again later.',
        // });

        try {
            // ارسال درخواست به سمت سرور
            const response = await axios.post('http://localhost:3001/api/data', formData);
            console.log(response.data);


            // ریدایرکت به صفحه مورد نظر
            window.location.href = '/account/login';
        } catch (error) {
            console.error('Error:', error);

            // پردازش خطا و نمایش پوش‌نوتیفیکیشن با استفاده از SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred during registration. Please try again later.',
            });
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center" style={{ textAlign: 'center' }}>
                <form className="row flex-column" style={{ width: '30%' }} onSubmit={handleSubmit}>
                    <h5 style={{ fontWeight: '900' }}>ساخت حساب کاربری</h5>
                    <input
                        className='col'
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="نام"
                    />
                    <input
                        className='col'
                        type="text"
                        name="lastname"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="نام خانوادگی"
                    />
                    <input
                        className='col'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ایمیل"
                    />
                    <input
                        className='col'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="کلمه عبور"
                    />
                    <input
                        className='col'
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="نام نمایشی"
                    />
                    <button href="#">ساخت حساب</button>
                    <p style={{ cursor: 'pointer' }} onClick={() => location.href = '/account/login'}>ورود به حساب کاربری</p>


                </form>
            </div>

        </>
    )

}