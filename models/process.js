"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class process extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      process.belongsToMany(models.param, {
        through: "unitParamProcess",
        as: "params",
        foreignKey: "processId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      process.hasMany(models.specData);
    }
  }
  process.init(
    {
      processId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      description: DataTypes.STRING,
      search: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "process",
      timestamps: false,
    }
  );
  return process;
};
