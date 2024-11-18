const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = express.Router();

// Create user (no authentication required)
//router.post('/', async (req, res) => {
  //const { email, password } = req.body;

//  try {
  //  const hashedPassword = await bcrypt.hash(password, 10);
    //const user = await User.create({
      //email,
      //password: hashedPassword,
      
    //});

    //res.status(201).json(user);
  //} catch (error) {
    //res.status(500).json({ message: 'Error creating user' });
 // }
//});

// Get all users
router.get('/', auth, async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Update user
router.put('/:userId', auth, async (req, res) => {
  const { userId } = req.params;
  const { email, password } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.email = email || user.email;
    user.password = password ? await bcrypt.hash(password, 10) : user.password;
    

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
});

// Delete user
router.delete('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

module.exports = router;
