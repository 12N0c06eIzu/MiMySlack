'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    pk_uid: DataTypes.INTEGER,
    pk_wid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    pk_iid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};