'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spot.belongsTo(models.User, {foreignKey: 'ownerId'})
      Spot.hasMany(models.Booking, {foreignKey: 'spotId'})
      Spot.hasMany(models.Review, {foreignKey: 'spotId'})
      Spot.hasMany(models.Image, {foreignKey: 'spotId'})


    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address:{
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 80]
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 80]
      }
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: -90.999999,
        max: 90.999999
      }
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: -180,
        max: 180
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,256]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 256]
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 5
      }
    },
    }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
