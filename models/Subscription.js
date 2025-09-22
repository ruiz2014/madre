const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.js'); 

const Subscription = sequelize.define("Subscription", {
    // Define aquí las columnas de tu tabla que ya existe
    // Por ejemplo:
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    local_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    endpoint: {
        type: DataTypes.STRING,
        allowNull: false
    },
    auth: {
        type: DataTypes.STRING,
        allowNull: true
    },
    p256dh: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: "1"
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    tableName: 'subscriptions', // ¡Importante! Especifica el nombre de tu tabla
    timestamps: false,
    deletesAt: false
  });

  module.exports = Subscription;
  
