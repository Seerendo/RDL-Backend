"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("specData", {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: false,
        type: Sequelize.STRING,
        field: "specId",
        references: {
          model: "specs",
          key: "specId",
        },
      },
      paramId: {
        type: Sequelize.STRING,
        references: {
          model: "params",
          key: "paramId",
        },
      },
      processId: {
        type: Sequelize.STRING,
        references: {
          model: "processes",
          key: "processId",
        },
      },
      unitId: {
        type: Sequelize.STRING,
        references: {
          model: "units",
          key: "unitId",
        },
      },
      frecuencyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "frecuencies",
          key: "frecuencyId",
        },
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
      minLote: {
        type: Sequelize.DOUBLE,
      },
      maxLote: {
        type: Sequelize.DOUBLE,
      },
      minCliente: {
        type: Sequelize.DOUBLE,
      },
      maxCliente: {
        type: Sequelize.DOUBLE,
      },
      minPlanta: {
        type: Sequelize.DOUBLE,
      },
      maxPlanta: {
        type: Sequelize.DOUBLE,
      },
      minCarga: {
        type: Sequelize.DOUBLE,
      },
      maxCarga: {
        type: Sequelize.DOUBLE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("specData");
  },
};
