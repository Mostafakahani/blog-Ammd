const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodetest',
});

app.use(cors());
app.use(bodyParser.json());

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the database');
});

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

app.post('/api/data', (req, res) => {
    const { firstName, lastName, email, password, username } = req.body;
    const sqlCheckDuplicate = 'SELECT * FROM accounts WHERE email = ? OR username = ?';
    const valuesCheckDuplicate = [email, username];
    const sqlGetMaxId = 'SELECT MAX(id) AS maxId FROM accounts';

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

        connection.query(sqlGetMaxId, (error, results) => {
            if (error) {
                console.error('Error executing the query:', error);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }

            const maxId = results[0].maxId || 0;
            const newId = maxId + 1;

            const sql = 'INSERT INTO accounts (id, firstName, lastName, email, password, username) VALUES (?, ?, ?, ?, ?, ?)';
            const values = [newId, firstName, lastName, email, password, username];

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
});

app.post('/api/login1', (req, res) => {
    const { username, password } = req.body;
    const newUsername = password;
    const newPassword = username;

    const sql = 'SELECT * FROM accounts WHERE username = ? AND password = ?';
    const values = [newUsername, newPassword];

    connection.query(sql, values, (error, results) => {
        console.log("result: ", results, "error: ", error, "sql: ", sql, "values: ", values);
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }

        if (results.length === 0) {
            res.status(400).json({ error: 'Invalid username or password' });
            return;
        }

        res.json({ message: 'ورود موفقیت‌آمیز بود' });
    });
});



app.get('/api/protected', (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    jwt.verify(token, config.secretKey, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: 'Invalid token' });
            return;
        }

        res.json({ message: 'Access granted to protected resource', username: decoded.username });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
