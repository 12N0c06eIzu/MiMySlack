'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Thread.init({
    pk_tid: DataTypes.INTEGER,
    pk_sid: DataTypes.INTEGER,
    pk_uid: DataTypes.INTEGER,
    content: DataTypes.STRING,
    send_dt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Thread',
  });
  return Thread;
};