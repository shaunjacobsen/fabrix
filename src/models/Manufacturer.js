'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manufacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Manufacturer.init(
    {
      manufacturer_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      country: DataTypes.STRING,
      notes: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Manufacturer',
    }
  );
  return Manufacturer;
};
