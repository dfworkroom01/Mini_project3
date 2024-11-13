const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = (sequelize) => {
    const Consultant = sequelize.define('Consultant', {
        consultant_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
        },
        hire_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        specialization: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive', 'on leave'),
            defaultValue: 'active',
        },
    }, {
        timestamps: true,
    });

    // Associations
    Consultant.associate = (models) => {
        Consultant.hasMany(models.Project, {
            foreignKey: 'consultant_id',
            as: 'projects', // alias
        });
        Consultant.hasMany(models.Contract, {
            foreignKey: 'consultant_id',
            as: 'contracts', //alias
        });
        Consultant.hasMany(models.Session, {
            foreignKey: 'consultant_id',
            as: 'sessions', // alias
        });
    };

    return Consultant;
};

