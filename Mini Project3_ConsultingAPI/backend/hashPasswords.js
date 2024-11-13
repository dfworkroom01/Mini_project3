const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const sequelize = require('./config/db');  // Import the Sequelize instance from db.js

// Function to generate a random password
function generateRandomPassword(length = 12) {
  return crypto.randomBytes(length).toString('hex'); // Generates a random hex string
}

// Function to hash existing passwords or set new ones if missing
async function hashExistingPasswords() {
  try {
    // Optionally sync database
    await sequelize.sync();  // Sync to db (ensure table schema matches the model)

    // Fetch all users from the database using raw SQL query
    const [results, metadata] = await sequelize.query('SELECT * FROM users'); 

    // Iterate through each user and hash their password
    for (let user of results) {
      const password = user.password;

      // If the password is missing or not hashed (i.e., plaintext password)
      if (!password || !/^(\$2[ayb]\$.{56})/.test(password)) {
        // Generate a random password
        const randomPassword = generateRandomPassword();  // Generate a random password
        const hashedPassword = await bcrypt.hash(randomPassword, 10);  // Hash the generated password

        // Update the user record with the hashed password
        await sequelize.query(
          'UPDATE users SET password = ? WHERE user_id = ?',
          {
            replacements: [hashedPassword, user.user_id], // Bind hashed password and user_id
            type: sequelize.QueryTypes.UPDATE  // Indicate it's an update query
          }
        );

        console.log(`User ID ${user.user_id}: Password set to random and hashed: ${randomPassword}`);
      }
    }
  } catch (error) {
    console.error('Error while hashing passwords:', error);
  }
}

// Call the function to start the process
hashExistingPasswords();
