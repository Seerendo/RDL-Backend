const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Unit = require('./unit');
const Param = require('./param');

class UnitParam extends Model {}
UnitParam.init(
  {
    param_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Param,
        key: 'param_id',
      },
    },
    unit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Unit,
        key: 'unit_id',
      },
    },
    //#TODO: Realizar foreign key
  },
  {
    sequelize,
    modelName: 'unit_param',
    timestamps: false,
  }
);

Param.belongsToMany(Unit, {
  through: 'unit_params',
  foreignKey: 'param_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Unit.belongsToMany(Param, {
  through: 'unit_params',
  foreignKey: 'unit_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = UnitParam;
