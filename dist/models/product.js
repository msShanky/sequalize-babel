"use strict";

module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    productCode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING(100),
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
    tableName: 'Product'
  });
  return Product;
};