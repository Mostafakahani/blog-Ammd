const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// اتصال به پایگاه داده MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodetest',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database');
});

app.use(cors());
app.use(bodyParser.json());

// API برای دریافت لیست مطالب
app.get('/api/posts', (req, res) => {
  const sql = 'SELECT * FROM posts';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json(results);
  });
});

// API برای ارسال مطلب جدید
app.post('/api/posts', (req, res) => {
  const { title, content, author, imageUrl } = req.body;
  const date = new Date();
  const formattedDate = date.toISOString();

  const sql =
    'INSERT INTO posts (title, content, author, image_url, publish_date) VALUES (?, ?, ?, ?, ?)';
  const values = [title, content, author, imageUrl, formattedDate];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error executing the query:', error);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    res.json({ message: 'Post added successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
