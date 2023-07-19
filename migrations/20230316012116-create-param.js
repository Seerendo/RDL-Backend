"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("params", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "paramId",
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      search: {
        type: Sequelize.STRING,
      },
      cuali: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      active: {
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
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
        type: Sequelize.ENUM,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("params");
  },
};
