// import '@/styles/login.module.css'
import axios from 'axios';

import { useState } from "react";

export default function Login() {

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

        try {
            const response = await axios.post('http://localhost:3001/api/data', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
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


                </form>
            </div>

        </>
    )

}