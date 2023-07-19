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
    <div className="container dashboard-container">
      <h1 className="dashboard-title">Welcome, {user.username}</h1>
      <p className="dashboard-info">Full Name: {user.fullName}</p>
      <p className="dashboard-info">Email: {user.email}</p>

      <h2 className="dashboard-migrations-title">Migrations:</h2>
      <ul className="dashboard-migrations">
        {migrations.map((migration, index) => (
          <li className="dashboard-migration" key={index}>{migration}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
