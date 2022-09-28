'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      supplier_id: DataTypes.INTEGER,
      order_reference: DataTypes.STRING,
      shipment_date: DataTypes.STRING,
      shipment_courier: DataTypes.STRING,
      shipment_reference: DataTypes.STRING,
      receipt_date: DataTypes.TIME,
      payment_date: DataTypes.TIME,
      payment_method: DataTypes.STRING,
      subtotal_cents: DataTypes.INTEGER,
      shipping_cents: DataTypes.INTEGER,
      import_cents: DataTypes.INTEGER,
      tax_cents: DataTypes.INTEGER,
      adjustment_cents: DataTypes.INTEGER,
      total_cents: DataTypes.INTEGER,
      notes: DataTypes.TEXT,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
