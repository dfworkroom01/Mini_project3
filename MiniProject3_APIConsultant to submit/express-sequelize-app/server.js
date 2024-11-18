const express = require('express');
const sequelize = require('./config/config');
const User = require('./models/user');
const Client = require('./models/client');
const Consultant = require('./models/consultant');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const clientRoutes = require('./routes/clientRoutes');
const consultantRoutes = require('./routes/consultantRoutes');
const app = express();


app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/consultants', consultantRoutes);

// Sync database
sequelize.sync().then(() => {
  app.listen(5001, () => console.log('Server running on port 5001'));
});

// Sync database
sequelize.sync({ force: false })  // Will not drop and recreate tables
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => console.log(err));


