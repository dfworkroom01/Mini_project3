const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Consultant = sequelize.define('Consultant', {
  consultantId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
 }, {
    
    tableName: 'consultants',
  timestamps: true
});

module.exports = Consultant;
