"use strict";

/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
  var BindingStatus = sequelize.define('bindingstatus', {
    BindingStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BindingStatus: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    // CreatedAt: {
    // 	type: DataTypes.DATE,
    // 	allowNull: true,
    // 	defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    // },
    // UpdatedAt: {
    // 	type: DataTypes.DATE,
    // 	allowNull: true,
    // 	defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    // },
    CreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    UpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'bindingstatus'
  });
  return BindingStatus;
};