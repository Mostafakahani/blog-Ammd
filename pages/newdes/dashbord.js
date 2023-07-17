import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [migrations, setMigrations] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3002/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data.user);
        setMigrations(response.data.migrations);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Full Name: {user.fullName}</p>
      <p>Email: {user.email}</p>

      <h2>Migrations:</h2>
      <ul>
        {migrations.map((migration, index) => (
          <li key={index}>{migration}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
