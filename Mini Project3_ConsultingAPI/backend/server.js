const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const consultantRoutes = require('./routes/consultantRoutes');
const projectRoutes = require('./routes/projectRoutes');
const contractRoutes = require('./routes/contractRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const sequelize = require('./config/db'); // Import the sequelize instance

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/consultants', consultantRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/services', serviceRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Consulting Firm API is running...');
});

// Database Sync
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();  // Authenticate the Sequelize connection
    console.log('Database connection established successfully.');

    await sequelize.sync({ force: false }); // `force: false` will not drop existing tables
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error syncing the database:', error);
    process.exit(1);  // Exit the application if the DB connection fails
  }
};

// Start the server after DB sync
const startServer = async () => {
  await syncDatabase();  // Wait until DB sync is complete before starting the server
  const PORT = process.env.PORT || 5000;
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  // Shutdown logic
  process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error);
    server.close(() => process.exit(1));
  });

  process.on('SIGINT', () => {
    console.log('Server is shutting down...');
    server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
    });
  });
};

// Start the server
startServer();
