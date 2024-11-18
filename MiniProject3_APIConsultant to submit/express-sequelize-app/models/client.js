const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Client = sequelize.define('Client', {
  clientId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
}, {
  timestamps: true
});

module.exports = Client;
