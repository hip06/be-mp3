'use strict';
module.exports = {
  /*
  avatarAlbum: DataTypes.STRING,
    idSong: DataTypes.STRING,
    avatarSong: DataTypes.STRING,
    titleSong: DataTypes.STRING,
    artistSong: DataTypes.STRING,
    dayRelease: DataTypes.STRING,
    duartion: DataTypes.INTEGER, 
  */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER
      },
      idAlbum: {
        type: Sequelize.STRING
      },
      idSong: {
        type: Sequelize.STRING
      },
      avatarSong: {
        type: Sequelize.STRING
      },
      avatarAlbum: {
        type: Sequelize.STRING
      },
      titleSong: {
        type: Sequelize.STRING
      },
      artistSong: {
        type: Sequelize.STRING
      },
      dayRelease: {
        type: Sequelize.STRING
      },
      duartion: {
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
    await queryInterface.dropTable('Recents');
  }
};