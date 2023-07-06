"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("process_params", {
      paramId: {
        type: Sequelize.INTEGER,
        references: {
          model: "params",
          key: "paramId",
        },
      },
      processId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("process_params");
  },
};
