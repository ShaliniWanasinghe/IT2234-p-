const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'vau.phy@2025';

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send('Please provide all required fields!');
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).send('Username or email already taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const payload = { id: newUser._id, username: newUser.username };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    res.status(201).json({ user: { id: newUser._id, username: newUser.username, email: newUser.email }, token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error!');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send('Please provide both username and password!');
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('User not found!');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials!');
    }

    const payload = { id: user._id, username: user.username };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    res.status(200).json({ user: { id: user._id, username: user.username, email: user.email }, token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error!');
  }
});

module.exports = router;

