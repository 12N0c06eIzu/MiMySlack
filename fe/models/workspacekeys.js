'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkspaceKeys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WorkspaceKeys.belongsTo(models.Workspace, { foreignKey: 'pk_wid'});
    }
  }
  WorkspaceKeys.init({
    pk_wid: DataTypes.INTEGER,
    pk_uid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WorkspaceKeys',
  });
  return WorkspaceKeys;
};