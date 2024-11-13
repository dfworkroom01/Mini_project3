const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = (sequelize) => {
  const Invoice = sequelize.define('Invoice', {
    invoice_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    invoice_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM('paid', 'unpaid', 'overdue'),
      defaultValue: 'unpaid',
    },
  }, {
    timestamps: true,
  });

  return Invoice;
};
