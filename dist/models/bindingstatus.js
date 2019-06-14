"use strict";

module.exports = function (sequelize, DataTypes) {
  var BindingStatus = sequelize.define('BindingStatus', {
    bindingStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bindingStatus: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'BindingStatus'
  });
  return BindingStatus;
};