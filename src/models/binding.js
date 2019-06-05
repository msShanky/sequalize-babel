/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
	const Binding = sequelize.define(
		'binding',
		{
			BindingId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
			},
			PampersLoyaltyId: {
				type: DataTypes.STRING(50),
				allowNull: false,
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
			BindingStatusId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				references: {
					model: 'bindingstatus',
					key: 'BindingStatusId',
				},
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
			tableName: 'binding',
		}
	);
	console.log(Binding, 'Model');
	// Binding.associate(models => {
	// 	Binding.belongsTo(models.retailer, { foreignKey: 'RetailerId' });
	// 	Binding.belongsTo(models.bindingstatus, { foreignKey: 'BindingStatusId' });
	// });
	return Binding;
};
