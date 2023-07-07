// index.js (بخش بک‌اند)
const express = require('express');
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');

const app = express();
const port = 3001;

// تنظیمات CORS
app.use(cors());

// تنظیمات برای دریافت اطلاعات درخواست
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// اتصال به پایگاه داده MySQL با استفاده از Sequelize
const sequelize = new Sequelize('nodetest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// تعریف مدل کاربر
class User extends Model {}
User.init({
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'account' });

// تعریف مدل پروفایل
class Profile extends Model {}
Profile.init({
  fullName: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize, modelName: 'profile' });

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
      res.status(200).json({ message: 'ورود موفقیت‌آمیز', user });
    } else {
      // اعتبار سنجی ناموفق بوده است
      res.status(401).json({ message: 'اعتبار سنجی ناموفق' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'خطا در لاگین' });
  }
});

// شروع سرور
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
