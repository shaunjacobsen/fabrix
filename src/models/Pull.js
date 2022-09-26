'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pull extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pull.init(
    {
      pull_id: DataTypes.INTEGER,
      unit_id: DataTypes.STRING,
      project_id: DataTypes.STRING,
      notes: DataTypes.TEXT,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Pull',
    }
  );
  return Pull;
};
