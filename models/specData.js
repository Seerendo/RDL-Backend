"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class specData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      specData.belongsTo(models.frecuency);
      specData.belongsTo(models.param);
      specData.belongsTo(models.process);
      specData.belongsTo(models.spec);
      specData.belongsTo(models.unit);
    }
  }
  specData.init(
    {
      specId: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      paramId: DataTypes.INTEGER,
      processId: DataTypes.INTEGER,
      unitId: DataTypes.INTEGER,
      frecuencyId: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
      minLote: DataTypes.DOUBLE,
      maxLote: DataTypes.DOUBLE,
      minCliente: DataTypes.DOUBLE,
      maxCliente: DataTypes.DOUBLE,
      minPlanta: DataTypes.DOUBLE,
      maxPlanta: DataTypes.DOUBLE,
      minCarga: DataTypes.DOUBLE,
      maxCarga: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "specData",
      timestamps: false,
    }
  );
  return specData;
};
