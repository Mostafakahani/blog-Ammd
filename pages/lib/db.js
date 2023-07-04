const { Sequelize } = require('sequelize');

// بارگیری متغیرهای محیطی از فایل .env
require('dotenv').config();

// تنظیمات اتصال به دیتابیس
const sequelize = new Sequelize(
    'nodetest',
    'root',
    '',
    {
        host: 'localhost',
        // port: process.env.DB_PORT,
        dialect: 'mysql',
    }
);
console.log(process.env.DB_DATABASE)

// تست اتصال به دیتابیس
sequelize
    .authenticate()
    .then(() => {
        console.log('اتصال به دیتابیس برقرار شد. Ok');
    })
    .catch((error) => {
        console.error('خطا در اتصال به دیتابیس:', error);
    });

module.exports = sequelize;
