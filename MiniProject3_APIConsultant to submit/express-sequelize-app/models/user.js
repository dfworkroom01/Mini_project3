const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
},
}, {
    
    tableName: 'users',
  timestamps: true
});

module.exports = User;
