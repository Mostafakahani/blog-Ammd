const bcrypt = require('bcryptjs');
const { User } = require('../models/User');

// تابع کنترلر برای دریافت کاربران
async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  getUsers,
};
