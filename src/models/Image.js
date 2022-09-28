'use strict';
const { Model } = require('sequelize');
const { User } = require('./');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.User, { foreignKey: 'image_id' });
    }
  }
  Image.init(
    {
      image_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      url: DataTypes.STRING,
      cloudinary_public_id: DataTypes.STRING,
      format: DataTypes.STRING,
      secure_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );
  return Image;
};
