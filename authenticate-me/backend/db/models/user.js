'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const  {id, username, email} = this;
      return {id, username, email};
    }
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }
    static getCurrentUserId(id) {
      return User.scope('currentUser').findByPk(id)
    }
static async login ({credential, password}) {
  const {Op} = require('sequelize')
  const user = await User.scope('loginUser').findOne({
    where: {
      [Op.or]: {
        username: credential,
        email: credential
      }
    }
  })
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id)

    }
  }
  static async signup({ username, email, password}) {
    const hashedPassword = bcrpyt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id)
  }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username:{
      type: DataTypes.STRING,
      allowNull: false,
    validate: {
        len: [4, 30],
        isNotEmail (value) {
          if (validator.isEmail(value)){
            throw new Error ("Cannot be an email")
          }
        }

    }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    hashedPassword:{
     type: DataTypes.STRING.BINARY,
     allowNull: false,
     validate: {
      len: [60,60]
     }
    }

  }, {
    sequelize,
    modelName: 'User',
    defualtScoppe: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
      scopes: {
        currentUser: {
          attributes: {exclude: ['hashedPassword']}
        },
        loginUser: {
          attributes: {}
        }
      }
  });
  return User;
};
