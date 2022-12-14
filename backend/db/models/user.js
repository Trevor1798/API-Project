'use strict';
const { Model, Validator } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcryptjs');
  const { Op } = require('sequelize');

  class User extends Model {

    toSafeObject() {
      const { firstName, lastName, id, username, email } = this; // context will be the User instance
      return {firstName, lastName, id, username, email};
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }
        static getCurrentUserById(id) {
          return User.scope("currentUser").findByPk(id);
        }

    static async login({ credential, password }) {
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    }


    static async signup({ firstName, lastName, username, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        firstName,
        lastName,
        email,
        username,
        hashedPassword
      });
      return await User.scope('currentUser').findByPk(user.id);
    }
    static associate(models) {
      User.hasMany(models.Booking, {foreignKey: 'userId'})
      User.hasMany(models.Review, {foreignKey: 'userId' })
      User.hasMany(models.Spot, {foreignKey: 'ownerId' })
      User.hasMany(models.Image, {foreignKey: 'userId'})
      // define association here
    }
  };

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,

        validate: {
          len: [4, 80]
        }
      },
      lastName: {
        type: DataTypes.STRING,
      
        validate: {
          len: [4, 300]
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256]
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword", 'createdAt', 'updatedAt'] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );
  return User;
};
