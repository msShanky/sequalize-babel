"use strict";

module.exports = function (sequelize, DataTypes) {
  var Binding = sequelize.define('Binding', {
    bindingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pampersLoyaltyId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    retailerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Retailer',
        key: 'retailerId'
      }
    },
    retailerMembershipId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bindingStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BindingStatus',
        key: 'bindingStatusId'
      }
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
    tableName: 'Binding',
    modelName: 'binding'
  });
  return Binding;
};