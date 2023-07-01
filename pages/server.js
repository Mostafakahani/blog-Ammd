const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');

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
    const sqlCheckDuplicate = 'SELECT * FROM users WHERE email = ? OR username = ?';
    const valuesCheckDuplicate = [email, username];

    connection.query(sqlCheckDuplicate, valuesCheckDuplicate, (error, results) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }

        if (results.length > 0) {
            res.status(409).json({ error: 'Email or username already exists' });
            return;
        }

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
});

// راه‌اندازی روت برای احراز هویت
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // // در اینجا باید اطلاعات کاربر را با داده‌های موجود در دیتابیس مقایسه کنید

    // // مثال ساده: احراز هویت برای کاربر admin با رمز عبور password123
    // if (username === 'admin' && password === 'password123') {
    //     // احراز هویت موفقیت‌آمیز بوده است

    //     // ایجاد توکن JWT
    //     const token = jwt.sign({ username }, config.secretKey, { expiresIn: '1h' });

    //     res.json({ token });
    // } else {
    //     // احراز هویت ناموفق بوده است
    //     res.status(401).json({ error: 'Invalid username or password' });
    // }
    // بررسی اطلاعات کاربر
    if (username !== 'admin' || password !== 'password') {
      // ارسال خطا به فرانت اند
      return res.status(400).json({ error: 'نام کاربری یا رمز عبور نادرست است' });
    }
  
    // اگر اطلاعات صحیح بود، ارسال پاسخ موفق به فرانت اند
    res.json({ message: 'ورود موفقیت‌آمیز بود' });
});

// راه‌اندازی روت برای دسترسی به منابع محافظت‌شده
app.get('/api/protected', (req, res) => {
    // بررسی وجود توکن JWT در هدر Authorization
    const token = req.headers.authorization;

    if (!token) {
        // توکن وجود ندارد
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    // تأیید و صحت‌سنجی توکن
    jwt.verify(token, config.secretKey, (err, decoded) => {
        if (err) {
            // توکن نامعتبر است
            res.status(401).json({ error: 'Invalid token' });
            return;
        }

        // توکن صحیح است و می‌توان به منابع محافظت‌شده دسترسی پیدا کرد
        res.json({ message: 'Access granted to protected resource', username: decoded.username });
    });
});



















app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
