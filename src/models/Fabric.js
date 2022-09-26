'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fabric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fabric.init({
    fabric_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    color_name: DataTypes.STRING,
    color_group_id: DataTypes.INTEGER,
    manufacturer_id: DataTypes.STRING,
    manufacturer_sku: DataTypes.STRING,
    cm_in_stock: DataTypes.INTEGER,
    cm_reserved: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fabric',
  });
  return Fabric;
};