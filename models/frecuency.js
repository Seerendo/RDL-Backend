const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Frecuency extends Model {}
Frecuency.init(
  {
    frecuency_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'frecuency',
    timestamps: false,
  }
);

module.exports = Frecuency;
