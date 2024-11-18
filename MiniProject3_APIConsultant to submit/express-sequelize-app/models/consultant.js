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
  
    sequelize,
    modelName: 'Consultant',
    tableName: 'consultants',  // The table name in  database
    timestamps: true,          // Include createdAt and updatedAt fields
  },
);

module.exports = Consultant;
