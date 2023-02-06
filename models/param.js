const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Param extends Model {}
Param.init(
  {
    param_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuali: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    field: {
      type: DataTypes.ENUM,
      values: [
        'FISICO & QUIMICO',
        'CONTAMINANTE',
        'INSTRUMENTAL',
        'MICROBIOLOGICO',
        'FUNCIONAL',
        'POR DEFINIR',
      ],
      defaultValue: 'POR DEFINIR',
    },
  },
  {
    sequelize,
    modelName: 'param',
    timestamps: false
  }
);

module.exports = Param;
