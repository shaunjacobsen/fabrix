'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplier_id: {
        type: Sequelize.INTEGER
      },
      order_reference: {
        type: Sequelize.STRING
      },
      shipment_date: {
        type: Sequelize.STRING
      },
      shipment_courier: {
        type: Sequelize.STRING
      },
      shipment_reference: {
        type: Sequelize.STRING
      },
      receipt_date: {
        type: Sequelize.TIME
      },
      payment_date: {
        type: Sequelize.TIME
      },
      payment_method: {
        type: Sequelize.STRING
      },
      subtotal_cents: {
        type: Sequelize.INTEGER
      },
      shipping_cents: {
        type: Sequelize.INTEGER
      },
      import_cents: {
        type: Sequelize.INTEGER
      },
      tax_cents: {
        type: Sequelize.INTEGER
      },
      adjustment_cents: {
        type: Sequelize.INTEGER
      },
      total_cents: {
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
    await queryInterface.dropTable('Orders');
  }
};