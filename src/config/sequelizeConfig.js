const sequelizeConfig = {
	development: {
		username: 'root',
		password: 'password',
		database: 'pampers-backend-dev',
		host: '127.0.0.1',
		dialect: 'mysql',
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
