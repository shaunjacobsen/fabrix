'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FabricRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FabricRequest.init(
    {
      fabric_request_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      fabric_id: DataTypes.INTEGER,
      project_id: DataTypes.INTEGER,
      quantity_cm: DataTypes.INTEGER,
      notes: DataTypes.TEXT,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'FabricRequest',
    }
  );
  return FabricRequest;
};
