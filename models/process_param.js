"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class process_param extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  process_param.init(
    {
      paramId: DataTypes.INTEGER,
      processId: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "process_param",
      timestamps: false,
    }
  );
  return process_param;
};
