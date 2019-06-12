const sequelizeConfig = {
	development: {
		username: 'mindtree',
		password: 'pampers@2019',
		database: 'pampersgtgidbinding-stage',
		host: 'az-na-pampersgtgidbinding-stage.database.windows.net',
		dialect: 'mssql',
		dialectOptions: {
			options: {
				encrypt: true,
			},
		},
	},
	local: {
		username: 'root',
		password: 'password',
		database: 'pampers-backend-dev',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
};
export default sequelizeConfig;
