const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = (sequelize) => {
  const Session = sequelize.define('Session', {
    session_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    session_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    session_type: {
      type: DataTypes.ENUM('virtual', 'in-person'),
      defaultValue: 'virtual',
    },
    session_notes: {
      type: DataTypes.TEXT,
    },
  }, {
    timestamps: true,
  });

  return Session;
};
