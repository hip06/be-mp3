'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recent.init({
    idUser: DataTypes.INTEGER,
    idAlbum: DataTypes.STRING,
    avatarAlbum: DataTypes.STRING,
    idSong: DataTypes.STRING,
    avatarSong: DataTypes.STRING,
    titleSong: DataTypes.STRING,
    artistSong: DataTypes.STRING,
    dayRelease: DataTypes.STRING,
    duartion: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'Recent',
  });
  return Recent;
};