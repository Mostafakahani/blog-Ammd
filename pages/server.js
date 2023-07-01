const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// تنظیمات اتصال به دیتابیس
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodetest',
});

app.use(cors()); // اضافه کردن middleware cors به برنامه
app.use(bodyParser.json()); // اضافه کردن middleware body-parser به برنامه

// اتصال به دیتابیس
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the database');
});

// API برای دریافت اطلاعات از دیتابیس
app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM users';

    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }
        res.json(results);
    });
});

// API برای دریافت داده‌های فرم و ذخیره در دیتابیس
// app.post('/api/data', (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
//     const sql = 'INSERT INTO users (first_Name, last_name, email, password) VALUES (?, ?, ?, ?)';
//     const values = [firstName, lastName, email, password];

//     connection.query(sql, values, (error, result) => {
//         if (error) {
//             console.error('Error executing the query:', error);
//             res.status(500).json({ error: 'An error occurred' });
//             return;
//         }
//         res.json({ message: 'Data saved successfully' });
//     });
// });

app.post('/api/data', (req, res) => {
    const { firstName, lastName, email, password, username } = req.body;
    const sql = 'INSERT INTO users (first_Name, last_name, email, password, username) VALUES (?, ?, ?, ?, ?)';
    const values = [firstName, lastName, email, password, username];


    connection.query(sql, values, (error, result) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }
        res.json({ message: 'Data saved successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
