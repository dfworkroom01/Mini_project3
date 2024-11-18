const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelize = require("../config/config");

const User = require('../models/user');
const router = express.Router();
require('dotenv').config();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      
    });

    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Fetch the user by email using raw SQL query
      const [user] = await sequelize.query(
        'SELECT * FROM users WHERE email = :email',
        {
          replacements: { email },
          type: sequelize.QueryTypes.SELECT,
        }
      );
  
      // If no user found, return error
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      // Compare entered password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
  
      // If passwords don't match, return invalid credentials
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Log the password comparison for debugging (remove in production)
      console.log("Stored password hash:", user.password);
      console.log("Entered password:", password);
  
      // Generate JWT token if password matches
      const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

module.exports = router;
