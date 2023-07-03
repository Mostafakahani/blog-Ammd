const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config');


const sequelize = new Sequelize('nodetest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// برقراری اتصال و بررسی آن
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database');
        // ایجاد جداول در پایگاه داده
        return sequelize.sync();
    })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
app.post('/api/data', async (req, res) => {
    try {
        const { firstName, lastName, email, password, username } = req.body;

        const existingUser = await User.findOne({
            where: {
                [Sequelize.Op.or]: [{ email: email }, { username: username }],
            },
        });

        if (existingUser) {
            res.status(409).json({ error: 'Email or username already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            username,
        });

        res.json({ message: 'Data saved successfully', user: newUser });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });

        if (!user) {
            res.status(400).json({ error: 'Invalid username or password' });
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            res.status(400).json({ error: 'Invalid username or password' });
            return;
        }

        const token = jwt.sign({ username: user.username }, config.secretKey);

        res.json({ message: 'Successful login', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
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

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
        },
    },
    publishDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const { title, content, author, imageUrl } = req.body;

        const newPost = await Post.create({
            title,
            content,
            author,
            imageUrl,
        });

        res.json({ message: 'Post added successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
