'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init(
    {
      project_id: DataTypes.INTEGER,
      external_order_id: DataTypes.STRING,
      external_order_source: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      notes: DataTypes.TEXT,
      start_date: DataTypes.TIME,
      due_date: DataTypes.TIME,
      completion_date: DataTypes.TIME,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Project',
    }
  );
  return Project;
};
