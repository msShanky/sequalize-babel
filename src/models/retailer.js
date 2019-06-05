module.exports = (sequelize, DataTypes) => {
	const Retailer = sequelize.define(
		'retailer',
		{
			RetailerId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
			},
			RetailerName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			RetailerType: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
			},
			LogoCDN: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			LogoBase64: {
				type: 'BLOB',
				allowNull: true,
			},
			MembershipIdValidationRegex: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			MembershipIdName: {
				type: DataTypes.STRING(50),
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
			tableName: 'retailer',
		}		
	);

	return Retailer;
};
