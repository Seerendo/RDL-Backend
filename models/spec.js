const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Param = require('./param');

class Spec extends Model {}
Spec.init(
  {
    spec_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      values: ['VIGENTE', 'DESARROLLO', 'EN REVISION', 'HISTORICO'],
      defaultValue: 'DESARROLLO',
    },
    spec_type: {
      type: DataTypes.ENUM,
      values: [
        'ESPEC. ALIMENTOS',
        'ESPEC. HCP',
        'ESPEC. EMPAQUE',
        'SIN ESPECIFICACION',
      ],
      defaultValue: 'SIN ESPECIFICACION',
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      references: {
        model: User,
        key: 'user_id',
      },
    },
  },
  {
    sequelize,
    modelName: 'spec',
  }
);

Param.belongsTo(Spec);

module.exports = Spec;
