/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define(
		'product',
		{
			ProductId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			ProductCode: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			ProductName: {
				type: DataTypes.STRING(100),
				allowNull: false,
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
			tableName: 'product',
		}
	);
	return Product;
};
