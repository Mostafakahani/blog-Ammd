const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

// تعریف مدل
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registrationTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  lastLoginTime: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

const router = express.Router();

// روت برای ثبت نام کاربر
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // بررسی وجود کاربر با ایمیل مشابه
  User.findOne({ where: { email } })
    .then((user) => {
      if (user) {
        res.status(400).json({ error: 'ایمیل قبلاً استفاده شده است' });
      } else {
        // هش کردن رمز عبور
        bcrypt.hash(password, 10)
          .then((hashedPassword) => {
            // ایجاد کاربر جدید
            User.create({ name, email, password: hashedPassword })
              .then((user) => {
                res.status(201).json(user);
              })
              .catch((error) => {
                console.error('خطا در ایجاد کاربر:', error);
                res.status(500).json({ error: 'خطای سرور' });
              });
          })
          .catch((error) => {
            console.error('خطا در هش کردن رمز عبور:', error);
            res.status(500).json({ error: 'خطای سرور' });
          });
      }
    })
    .catch((error) => {
      console.error('خطا در جستجوی کاربر:', error);
      res.status(500).json({ error: 'خطای سرور' });
    });
});

// روت برای ورود کاربر
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // یافتن کاربر با ایمیل مشابه
  User.findOne({ where: { username } })
    .then((user) => {
      if (user) {
        // بررسی صحت رمز عبور
        bcrypt.compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              // بروزرسانی زمان آخرین ورود
              user.update({ lastLoginTime: new Date() })
                .then(() => {
                  // تولید توکن JWT
                  const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });
                  res.json({ token });
                })
                .catch((error) => {
                  console.error('خطا در بروزرسانی زمان آخرین ورود:', error);
                  res.status(500).json({ error: 'خطای سرور' });
                });
            } else {
              res.status(401).json({ error: 'رمز عبور اشتباه است' });
            }
          })
          .catch((error) => {
            console.error('خطا در بررسی رمز عبور:', error);
            res.status(500).json({ error: 'خطای سرور' });
          });
      } else {
        res.status(401).json({ error: 'کاربر یافت نشد' });
      }
    })
    .catch((error) => {
      console.error('خطا در جستجوی کاربر:', error);
      res.status(500).json({ error: 'خطای سرور' });
    });
});

module.exports = router;
