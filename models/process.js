const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Process extends Model {}
Process.init(
  {
    process_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'process',
  }
);

module.exports = Process;
