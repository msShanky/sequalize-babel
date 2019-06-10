/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
	const BindingStatus = sequelize.define(
		'bindingstatus',
		{
			BindingStatusId: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			BindingStatus: {
				type: DataTypes.STRING(20),
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
			tableName: 'bindingstatus',
		}
	);
	return BindingStatus;
};
