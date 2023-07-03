const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { User } = require('../models/User');

const router = express.Router();

// مسیر ورود
router.post('/login1', async (req, res) => {
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

// مسیر منحصر به فرد
router.get('/protected', (req, res) => {
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

module.exports = router;
