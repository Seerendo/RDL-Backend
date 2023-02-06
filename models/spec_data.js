const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Spec = require('./spec');
const Param = require('./param');
const Process = require('./process');
const Unit = require('./unit');
const Frecuency = require('./frecuency');

class SpecData extends Model {}
SpecData.init(
  {
    spec_data_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: false,
      references: {
        model: Spec,
        key: 'spec_id'
      }
    },
    param_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Param,
        key: 'param_id',
      }
    },
    process_id: {
      type: DataTypes.STRING,
      references: {
        model: Process,
        key: 'process_id',
      }
    },
    unit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Unit,
        key: 'unit_id'
      }
    },
    frecuency_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Frecuency,
        key: 'frecuency_id'
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    min_lote: {
      type: DataTypes.DOUBLE,
    },
    max_lote: {
      type: DataTypes.DOUBLE,
    },
    min_client: {
      type: DataTypes.DOUBLE,
    },
    max_client: {
      type: DataTypes.DOUBLE,
    },
    min_plant: {
      type: DataTypes.DOUBLE,
    },
    max_plant: {
      type: DataTypes.DOUBLE,
    },
    min_carga: {
      type: DataTypes.DOUBLE,
    },
    max_carga: {
      type: DataTypes.DOUBLE,
    }
  },
  {
    sequelize,
    modelName: 'spec_data',
    timestamps: false,
  }
);

Param.hasMany(SpecData, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'param_id'
});
Process.hasMany(SpecData, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'process_id'
});
Unit.hasMany(SpecData, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'unit_id'
});
Spec.hasMany(SpecData, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'spec_data_id'
});
Frecuency.hasMany(SpecData, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'frecuency_id'
});

module.exports = SpecData;
