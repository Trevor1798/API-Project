'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {

    static associate(models) {
      Review.hasMany(models.Image, {foreignKey: 'reviewId'})
      Review.belongsTo(models.User, {foreignKey: 'userId'})
      Review.belongsTo(models.Spot, {foreignKey: 'spotId'})

    }
  }
  Review.init({
    review:  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len:[1,1000]
    }
    },
    stars:  {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
      min: 1,
      max: 5
     }
    },
    userId:  {
     type: DataTypes.INTEGER,

     references: {model: 'Users'},
     onDelete: 'CASCADE'
    },
    spotId:  {
     type: DataTypes.INTEGER,

     references: {model: 'Spots'},
     onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
