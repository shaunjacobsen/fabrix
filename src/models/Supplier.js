'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Supplier.init(
    {
      supplier_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      contact_name: DataTypes.STRING,
      contact_company: DataTypes.STRING,
      contact_phone: DataTypes.STRING,
      contact_email: DataTypes.STRING,
      contact_website: DataTypes.STRING,
      contact_country: DataTypes.STRING,
      notes: DataTypes.TEXT,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Supplier',
    }
  );
  return Supplier;
};
