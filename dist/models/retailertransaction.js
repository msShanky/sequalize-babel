"use strict";

module.exports = function (sequelize, DataTypes) {
  var RetailerTransaction = sequelize.define('Retailertransaction', {
    retailerTransactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    pampersLoyaltyId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bindingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Binding',
        key: 'bindingId'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'productId'
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    invoiceAmount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    transactionId: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    activityTimestamp: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'RetailerTransaction'
  }); // RetailerTransaction.associate(models => {
  // 	RetailerTransaction.belongsTo(models.retailer, { foreignKey: 'RetailerId' });
  // 	RetailerTransaction.belongsTo(models.binding, { foreignKey: 'BindingId' });
  // 	RetailerTransaction.belongsTo(models.product, { foreignKey: 'ProductId' });
  // });

  return RetailerTransaction;
};