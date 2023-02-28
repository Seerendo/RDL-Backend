const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Unit = require('./unit');
const Param = require('./param');

class UnitParam extends Model {}
UnitParam.init(
  {
    association_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    param_id: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    //#TODO: Realizar foreign key
  },
  {
    sequelize,
    modelName: 'unit_param',
    timestamps: false,
  }
);

module.exports = UnitParam;
