'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fabrics', {
      fabric_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      color_name: {
        type: Sequelize.STRING
      },
      color_group_id: {
        type: Sequelize.INTEGER
      },
      manufacturer_id: {
        type: Sequelize.STRING
      },
      manufacturer_sku: {
        type: Sequelize.STRING
      },
      cm_in_stock: {
        type: Sequelize.INTEGER
      },
      cm_reserved: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.TEXT
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fabrics');
  }
};