/* eslint-disable no-console */
import db from '../models';

const sequalizeSync = () => {
	db.sequelize
		.authenticate()
		.then(() => {
			console.log('Successfull Connected to database');
		})
		.catch(error => console.log('error when connecting to database', error));
	// db.sequelize
	// 	.sync()
	// 	.sync({ force: true })
	// 	.then(() => {
	// 		console.log('Successfully Synced database');
	// 	})
	// 	.catch(error => console.log('error when syncing database', error));
};

export default sequalizeSync;
