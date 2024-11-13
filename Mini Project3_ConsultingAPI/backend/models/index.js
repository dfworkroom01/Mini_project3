// Import the Sequelize instance and models
const sequelize = require('../config/db');  // Import Sequelize instance

const Consultant = require('./consultants');
const User = require('./users');
const Client = require('./clients');
const Project = require('./projects');
const Contract = require('./contracts');
const Invoice = require('./invoices');
const Service = require('./services');
const Session = require('./sessions');

// Define associations (model relationships)
Consultant.hasMany(Project, { foreignKey: 'consultant_id' });
Consultant.hasMany(Contract, { foreignKey: 'consultant_id' });
Consultant.hasMany(Session, { foreignKey: 'consultant_id' });
User.belongsTo(Consultant, { foreignKey: 'consultant_id' });
Client.hasMany(Project, { foreignKey: 'client_id' });
Client.hasMany(Contract, { foreignKey: 'client_id' });
Client.hasMany(Session, { foreignKey: 'client_id' });
Project.hasMany(Invoice, { foreignKey: 'project_id' });
Project.belongsTo(Client, { foreignKey: 'client_id' });
Project.belongsTo(Consultant, { foreignKey: 'consultant_id' });
Contract.belongsTo(Client, { foreignKey: 'client_id' });
Contract.belongsTo(Consultant, { foreignKey: 'consultant_id' });
Session.belongsTo(Client, { foreignKey: 'client_id' });
Session.belongsTo(Project, { foreignKey: 'project_id' });
Session.belongsTo(Consultant, { foreignKey: 'consultant_id' });
Client.belongsToMany(Service, { through: 'Client_Services', foreignKey: 'client_id' });
Service.belongsToMany(Client, { through: 'Client_Services', foreignKey: 'service_id' });

// Sync models with database
sequelize.sync({ alter: true }) // Use { alter: true } to automatically adjust tables (be cautious in production)
  .then(() => {
    console.log('Models have been synced successfully.');
  })
  .catch((error) => {
    console.error('Unable to sync models:', error);
  });

// Export the models and Sequelize instance
module.exports = {
  sequelize,
  User,
  Consultant,
  Client,
  Project,
  Contract,
  Invoice,
  Service,
  Session,
};

