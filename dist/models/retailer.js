"use strict";

module.exports = function (sequelize, DataTypes) {
  var Retailer = sequelize.define('retailer', {
    RetailerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RetailerName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RetailerType: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LogoCDN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LogoBase64: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MembershipIdValidationRegex: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MembershipIdName: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'retailer'
  });
  return Retailer;
};