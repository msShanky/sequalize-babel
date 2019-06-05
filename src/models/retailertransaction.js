/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
	const RetailerTransaction = sequelize.define(
		'retailertransaction',
		{
			RetailerTransactionId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
			},
			RetailerId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				references: {
					model: 'retailer',
					key: 'RetailerId',
				},
			},
			RetailerMembershipId: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			PampersLoyaltyId: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			BindingId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				references: {
					model: 'binding',
					key: 'BindingId',
				},
			},
			ProductId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				references: {
					model: 'product',
					key: 'ProductId',
				},
			},
			Price: {
				type: 'DOUBLE',
				allowNull: true,
			},
			InvoiceAmount: {
				type: 'DOUBLE',
				allowNull: true,
			},
			TransactionId: {
				type: DataTypes.STRING(150),
				allowNull: true,
			},
			ActivityTimestamp: {
				type: DataTypes.DATE,
				allowNull: true,
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
				type: DataTypes.INTEGER(11),
				allowNull: true,
				defaultValue: '1',
			},
			UpdatedBy: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
				defaultValue: '1',
			},
		},
		{
			tableName: 'retailertransaction',
		}
	);
	console.log(RetailerTransaction, 'Model RetailerTransaction');

	// RetailerTransaction.associate(models => {
	// 	RetailerTransaction.belongsTo(models.retailer, { foreignKey: 'RetailerId' });
	// 	RetailerTransaction.belongsTo(models.binding, { foreignKey: 'BindingId' });
	// 	RetailerTransaction.belongsTo(models.product, { foreignKey: 'ProductId' });
	// });

	return RetailerTransaction;
};
