const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = (sequelize) => {
  const Project = sequelize.define('Project', {
    project_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM('ongoing', 'completed', 'pending'),
      defaultValue: 'pending',
    },
  }, {
    timestamps: true,
  });

  return Project;
};
