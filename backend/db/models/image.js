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
      // define association here
    }
  }
  Image.init({

    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reviewId:{
      type: DataTypes.INTEGER

    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
