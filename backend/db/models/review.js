'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.hasMany(models.Image, {foreginKey: 'reviewId'})
      Review.belongsTo(models.User, {foreginKey: 'userId'})
      Review.belongsTo(models.Spot, {foreginKey: 'spotId'})

    }
  }
  Review.init({
    review:  {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len:[20,1000]
    }
    },
    stars:  {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
      min: 0,
      max: 5
     }
    },
    userId:  {
     type: DataTypes.INTEGER,
     allowNull: false
    },
    spotId:  {
     type: DataTypes.INTEGER,
     allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
