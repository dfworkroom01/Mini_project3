const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = (sequelize) => {
  const Contract = sequelize.define('Contract', {
    contract_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    contract_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    contract_value: {
      type: DataTypes.DECIMAL(15, 2),
    },
    terms_and_conditions: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM('active', 'terminated', 'expired'),
      defaultValue: 'active',
    },
  }, {
    timestamps: true,
  });

  return Contract;
};
