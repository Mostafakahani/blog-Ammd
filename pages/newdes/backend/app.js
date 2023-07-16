// index.js (بخش بک‌اند)
const express = require('express');
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3002;

// تنظیمات CORS
app.use(cors());

// تنظیمات برای دریافت اطلاعات درخواست
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// اتصال به پایگاه داده MySQL با استفاده از Sequelize
const sequelize = new Sequelize('mydatabase', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
// 

// تعریف مدل کاربر
class User extends Model { }
User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  fullName: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize, modelName: 'users' });

// تعریف مدل پروفایل
class Profile extends Model { }
Profile.init({
  full_Name: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize, modelName: 'profiles' });

// تعریف رابطه یک به یک بین کاربر و پروفایل
User.hasOne(Profile);
Profile.belongsTo(User);

// اتصال به پایگاه داده
sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL database!');
  })
  .catch((err) => {
    console.error('Failed to connect to MySQL database:', err);
  });

// تعریف مسیر برای ثبت نام
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // ایجاد کاربر جدید با استفاده از مدل کاربر
    const user = await User.create({ username, password, email });

    res.status(201).json({ message: 'ثبت نام موفقیت‌آمیز', user });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'خطا در ثبت نام' });
  }
});

// مسیر و دریافت اطلاعات برای لاگین
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // بررسی اعتبار کاربر با استفاده از مدل کاربر
    const user = await User.findOne({
      where: {
        username,
        password
      },
      include: [Profile] // اضافه کردن پروفایل به نتیجه
    });

    if (user) {
      // کاربر وجود دارد و اعتبار سنجی موفقیت‌آمیز بوده است
      // ایجاد توکن JWT
      const token = jwt.sign({ userId: user.id }, 'mysecretkey');

      res.status(200).json({ message: 'ورود موفقیت‌آمیز', token });
    } else {
      // اعتبار سنجی ناموفق بوده است
      res.status(401).json({ message: 'اعتبار سنجی ناموفق' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'خطا در لاگین' });
  }
});

// مسیر ورود به داشبورد
app.get('/dashboard', verifyToken, (req, res) => {
  // دریافت کاربر با استفاده از توکن JWT
  const decodedToken = jwt.verify(req.token, 'mysecretkey');
  const userId = decodedToken.userId;

  // جستجوی کاربر با استفاده از مدل کاربر و اضافه کردن پروفایل
  User.findOne({
    where: { id: userId },
    include: [Profile]
  })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'دریافت اطلاعات کاربر موفقیت‌آمیز بود', user });
      } else {
        res.status(404).json({ message: 'کاربر یافت نشد' });
      }
    })
    .catch((error) => {
      console.error('Error while fetching user:', error);
      res.status(500).json({ message: 'خطا در دریافت اطلاعات کاربر' });
    });
});

// میان‌افزار بررسی توکن JWT
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}













// شروع سرور
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
