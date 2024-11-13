// Import Sequelize and dotenv
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config(); // To ensure .env file is loaded before accessing process.env

// Log the DB_URL to check if it's loaded correctly
console.log("DB_URL: ", process.env.DB_URL);

// Ensure DB_URL is defined
const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error('DB_URL environment variable is missing. Please check your .env file.');
}

// Import the URL class from the 'url' module
const { URL } = require('url');

// Parse the DB_URL using the new URL class
const parsedUrl = new URL(dbUrl);

// Extract components for Sequelize configuration
const dbConfig = {
  username: parsedUrl.username,    // Username from DB_URL
  password: parsedUrl.password,    // Password from DB_URL
  host: parsedUrl.hostname,        // Host 
  port: parsedUrl.port || 3306,    // Port (default to 3306)
  database: parsedUrl.pathname.slice(1), // Database name from the URL, removing the leading "/"
};

// Log the parsed configuration (optional, for debugging)
console.log(dbConfig);

// Initialize Sequelize with the parsed DB_URL components
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: 'mysql',  // 
  logging: false,    // Disable Sequelize query logging as now in dev
});

// Export the Sequelize instance
module.exports = sequelize;

