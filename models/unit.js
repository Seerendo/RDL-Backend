const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Unit extends Model {};
Unit.init({
  unit_id: {
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
  }
},{
  sequelize,
  modelName: 'unit'
});

module.exports = Unit;