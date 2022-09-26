'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Unit.init(
    {
      supplier_id: DataTypes.INTEGER,
      fabric_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      length_cm: DataTypes.INTEGER,
      notes: DataTypes.TEXT,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Unit',
    }
  );
  return Unit;
};
