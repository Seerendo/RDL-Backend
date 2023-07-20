"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class param extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      param.belongsToMany(models.unit, {
        through: "unitParamProcess",
        as: "units",
        foreignKey: "paramId",
      });
      param.belongsToMany(models.process, {
        through: "unitParamProcess",
        as: "processes",
        foreignKey: "paramId",
      });

      param.hasMany(models.specData);
    }
  }
  param.init(
    {
      paramId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      description: DataTypes.STRING,
      search: DataTypes.STRING,
      cuali: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
      field: {
        values: [
          "FISICO & QUIMICO",
          "CONTAMINANTE",
          "INSTRUMENTAL",
          "MICROBIOLOGICO",
          "FUNCIONAL",
          "POR DEFINIR",
        ],
        defaultValue: "POR DEFINIR",
        type: DataTypes.ENUM,
      },
    },
    {
      sequelize,
      modelName: "param",
      timestamps: false,
    }
  );
  return param;
};
