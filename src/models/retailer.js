module.exports = (sequelize, DataTypes) => {
	const Retailer = sequelize.define(
		'Retailer',
		{
			retailerId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			retailerName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			retailerType: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			logoCDN: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			logoBase64: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			membershipIdValidationRegex: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			membershipIdName: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			azureContainerName: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			createdBy: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: '1',
			},
			updatedBy: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: '1',
			},
		},
		{
			tableName: 'Retailer',
		}
	);

	return Retailer;
};
