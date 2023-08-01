"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("unitParamProcesses", {
      paramId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "params",
          key: "paramId",
        },
      },
      unitId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "units",
          key: "unitId",
        },
      },
      processId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "processes",
          key: "processId",
        },
      },
      active: {
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("unitParamProcesses");
  },
};
