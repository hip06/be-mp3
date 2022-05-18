'use strict';
module.exports = {
  /*
  idPlaylist: DataTypes.INTEGER,
    idSong: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    releasedDate: DataTypes.STRING,
    duration: DataTypes.INTEGER,
  */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Playlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPlaylist: {
        type: Sequelize.STRING
      },
      idUser: {
        type: Sequelize.INTEGER
      },
      idSong: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      artist: {
        type: Sequelize.STRING
      },
      releasedDate: {
        type: Sequelize.STRING
      },
      namePlaylist: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Playlists');
  }
};