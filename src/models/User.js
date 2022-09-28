'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const { Model } = require('sequelize');
const { generatePassword } = require('../helpers/auth/index');

const { SessionKey } = require('./');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Image, { foreignKey: 'image_id', targetKey: 'image_id' });
    }

    static async findByCredentials(email, password) {
      return this.findOne({ where: { email } })
        .then(user => {
          if (!user) {
            return Promise.reject();
          }

          return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
              if (res) {
                resolve(user);
              } else {
                reject(err);
              }
            });
          });
        })
        .catch(e => {
          return e;
        });
    }

    async generateAuthToken() {
      let token = jwt
        .sign(
          {
            _id: this.user_id,
            access: 'auth',
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          process.env.JWT_SECRET
        )
        .toString();
      let session = await sequelize.models.SessionKey.create({
        token: token,
        user_id: this.user_id,
        valid: true,
        expires: moment().add(2, 'weeks').format(),
      });
      return session.token;
    }
  }
  User.init(
    {
      user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      image_id: DataTypes.INTEGER,
      country: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeUpdate: async (user, options) => {
          if (user.changed('password')) {
            try {
              user.password = await generatePassword(user.password);
            } catch (e) {
              console.log(err);
            }
          }
        },
        beforeCreate: (user, options) => {
          return generatePassword(user.password)
            .then(encryptedPassword => {
              user.password = encryptedPassword;
            })
            .catch(err => {
              if (err) console.log(err);
              return Promise.reject('CANNOT_GENERATE_PASSWORD');
            });
        },
      },
    }
  );
  return User;
};
