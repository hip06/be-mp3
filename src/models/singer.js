'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Singer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Singer.belongsToMany(models.User, {
        through: 'User_Singer',
        foreignKey: 'idUser'
      })
    }
  }
  Singer.init({
    idUser: DataTypes.STRING,
    idSinger: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Singer',
  });
  return Singer;
};