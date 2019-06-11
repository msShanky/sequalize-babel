module.exports = (sequelize, DataTypes) => {
	const RetailerTransaction = sequelize.define(
		'retailertransaction',
		{
			RetailerTransactionId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			RetailerId: {
				type: DataTypes.INTEGER,
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
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'binding',
					key: 'BindingId',
				},
			},
			ProductId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'product',
					key: 'ProductId',
				},
			},
			Price: {
				type: DataTypes.FLOAT,
				allowNull: true,
			},
			InvoiceAmount: {
				type: DataTypes.FLOAT,
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
			// createdAt: {
			// 	type: DataTypes.DATE,
			// 	allowNull: true,
			// 	defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			// },
			// updatedAt: {
			// 	type: DataTypes.DATE,
			// 	allowNull: true,
			// 	defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			// },
			CreatedBy: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: '1',
			},
			UpdatedBy: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: '1',
			},
		},
		{
			tableName: 'retailertransaction',
		}
	);
	// RetailerTransaction.associate(models => {
	// 	RetailerTransaction.belongsTo(models.retailer, { foreignKey: 'RetailerId' });
	// 	RetailerTransaction.belongsTo(models.binding, { foreignKey: 'BindingId' });
	// 	RetailerTransaction.belongsTo(models.product, { foreignKey: 'ProductId' });
	// });

	return RetailerTransaction;
};
