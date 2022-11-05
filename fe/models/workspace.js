'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workspace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association herew
      Workspace.hasMany(models.WorkspaceKeys, {foreignKey: 'pk_wid'});
    }
  }
  Workspace.init({
    pk_wid: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please your "Name"',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Workspace',
  });
  return Workspace;
};