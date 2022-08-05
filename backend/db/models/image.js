'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.User, {foreignKey: 'userId'})
      Image.belongsTo(models.Spot, {foreignKey: 'spotId'})
      Image.belongsTo(models.Review, {foreginKey: 'reviewId'})

    }
  }
  Image.init({
    userId: {
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.STRING,

    },
   previewImg: {
      type: DataTypes.BOOLEAN,

    },
    spotId: {
      type: DataTypes.INTEGER,

    },
    reviewId:{
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
