'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Playlist.init({
    idPlaylist: DataTypes.STRING,
    idUser: DataTypes.INTEGER,
    idSong: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    releasedDate: DataTypes.STRING,
    namePlaylist: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};