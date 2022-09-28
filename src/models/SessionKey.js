'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SessionKey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SessionKey.init(
    {
      session_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      token: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      expires: DataTypes.TIME,
      valid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'SessionKey',
    }
  );
  return SessionKey;
};
