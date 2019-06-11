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
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
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
