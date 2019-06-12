import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import sequelizeConfig from '../config/sequelizeConfig';

const env = process.env.NODE_ENV || 'development';
const trimedENV = env.trim();
const config = sequelizeConfig[trimedENV];
const db = {};
const basename = path.basename(__filename);

const sequelize = new Sequelize(config.database, config.username, config.password, config);

console.log('Environment is', trimedENV);
console.log('Config fetched for the role', config);

fs.readdirSync(__dirname)
	.filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
	.forEach(file => {
		// eslint-disable-next-line dot-notation
		const model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
