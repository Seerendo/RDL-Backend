"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("units", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "unitId",
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      search: {
        type: Sequelize.STRING
      },
      active: {
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("units");
  },
};
