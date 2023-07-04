const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
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

const router = express.Router();

// تعریف مسیرهای دیتابیس
router.get('/data', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/data', async (req, res) => {
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

module.exports = router;
