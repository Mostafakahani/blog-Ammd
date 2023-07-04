const express = require('express');
const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const authRouter = require('./auth');

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
  }
});

const router = express.Router();

// اتصال به روتر مربوط به ثبت نام و ورود کاربر
router.use('/auth', authRouter);

// روت برای دریافت همه کاربران (نمایش اطلاعات کاربری به عنوان مسیر محافظت شده با JWT)
router.get('/', authenticateToken, (req, res) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error('خطا در دریافت کاربران:', error);
      res.status(500).json({ error: 'خطای سرور' });
    });
});

// تابع میان‌افزار برای تأیید صحت توکن JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ error: 'توکن معتبر نیست' });

  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) {
      console.error('خطا در تأیید توکن:', err);
      return res.status(403).json({ error: 'عدم دسترسی مجاز' });
    }
    req.user = user;
    next();
  });
}

module.exports = router;
