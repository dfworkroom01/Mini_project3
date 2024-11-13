const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../config/db'); // Import the sequelize instance
const User = require('../models/users'); // Pass sequelize to the model
const Consultant = require('../models/consultants'); // Pass sequelize to Consultant model
const users = require('../models/users');
const { JWT_SECRET } = process.env;

// Function to migrate consultants to users and generate JWT
async function migrateConsultantsToUsers(req, res) {
  try {
    const { first_name, last_name, email, password, consultant_id } = req.body;

    // Ensure all fields are present
    if (!first_name || !last_name || !email || !password || !consultant_id) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the 'users' table
    const { user_id } = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      consultant_id,
    });

    // Generate JWT token
    const token = jwt.sign({ user_id }, JWT_SECRET, { expiresIn: '1h' });
    
    // Send response with the JWT token
    res.status(201).json({ token });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: 'Error during registration' });
  }
}

// Function to hash all existing passwords
async function hashExistingPasswords(req, res) {
  try {
    const users = await User.findAll(); // Fetch all users

    for (const user of users) {
      // Check if password is already hashed (bcrypt hashed passwords typically start with "$2a$")
      if (user.password && !user.password.startsWith('$2a$')) {
        // Hash the password if it's not already hashed
        const hashedPassword = await bcrypt.hash(user.password, 10);

        // Update the password with the hashed version
        await User.update(
          { password: hashedPassword },
          { where: { user_id: user.user_id } }
        );

        console.log(`Password for user ${user.user_id} has been updated.`);
      }
    }

    // Send a response indicating success
    res.status(200).json({ message: 'Passwords have been updated successfully.' });
  } catch (error) {
    console.error("Error during password update:", error);
    res.status(500).json({ message: 'Error during password update' });
  }
}

//Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log the received email and password (in production, avoid logging passwords)
    console.log(`Login attempt for email: ${email}`);

    // Use `findOne` to find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ user_id: user.user_id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: 'Server error during login' });
  }
};


//Current users
const getCurrentUser = async (req, res) => {
  try {
    // Get the user_id from req.user, which is set by the verifyToken middleware
    const user = await User.findByPk(req.user.user_id, {
      include: {
        model: Consultant,
        as: 'consultant',  // Assuming this association exists in your models
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user data along with consultant details
    res.status(200).json(user);
  } catch (error) {
    console.error("Error getting current user:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { migrateConsultantsToUsers, hashExistingPasswords, login, getCurrentUser };
