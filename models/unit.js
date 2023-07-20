"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      unit.belongsToMany(models.param, {
        through: "unitParamProcess",
        as: "params",
        foreignKey: "unitId",
      });

      unit.hasMany(models.specData);
    }
  }
  unit.init(
    {
      unitId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      description: DataTypes.STRING,
      search: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "unit",
      timestamps: false,
    }
  );
  return unit;
};
