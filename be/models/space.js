'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Space.init({
    pk_sid: DataTypes.INTEGER,
    pk_wid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    dc_flag: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Space',
  });
  return Space;
};