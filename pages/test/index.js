import axios from 'axios';
import { useState } from 'react';

export default function Home({ data }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
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
        <div>
            <div className='container'>
                <form className='row' onSubmit={handleSubmit}>
                    <input
                        className='col'
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <input
                        className='col'
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <input
                        className='col'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        className='col'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <h1>Received Data:</h1>
            <pre style={{ direction: 'ltr' }}>{JSON.stringify(data, null, 2)}</pre>


        </div >
    );
}

export async function getServerSideProps() {
    try {
        const response = await axios.get('http://localhost:3001/api/data');
        const data = response.data;
        return { props: { data } };
    } catch (error) {
        console.error('Error retrieving data:', error);
        return { props: { data: null } };
    }
}
