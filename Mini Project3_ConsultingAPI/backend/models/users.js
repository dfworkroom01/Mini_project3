const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Sequelize instance
const Consultant = require('./consultants'); // Import Consultant model

module.exports = (sequelize) => {
  // Define the User model using sequelize.define
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(255), // Ensure length matches MySQL column
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(255), // Ensure length matches MySQL column
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255), // Ensure length matches MySQL column
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255), // Ensure length matches MySQL column
      allowNull: true,
    },
    consultant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Consultant, // Referencing the Consultant model
        key: 'consultant_id', // The primary key in the Consultant model
      },
      allowNull: true, // It's nullable in the MySQL schema
    },
  }, {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
    createdAt: 'created_at',  // Map Sequelize's default 'createdAt' to 'created_at' in DB
    updatedAt: 'updated_at',  // Map Sequelize's default 'updatedAt' to 'updated_at' in DB
  });

  // Define associations
  User.belongsTo(Consultant, {
    foreignKey: 'consultant_id',
    as: 'consultant', // Alias for the association
  });

  return User; // Return the User model
};

