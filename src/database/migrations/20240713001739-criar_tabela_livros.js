'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.createTable('livros', 
      { 
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING(150),
          unique: true,
          allowNull: false
        },
        qtd_paginas : {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        categoria_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'categorias',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        autor_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'autores',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
