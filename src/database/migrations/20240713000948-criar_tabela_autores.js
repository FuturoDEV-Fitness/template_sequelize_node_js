'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('autores',
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('autores');
   
  }
};
