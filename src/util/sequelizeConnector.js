/* eslint-disable no-console */
import db from '../models';

const sequalizeSync = () => {
	db.sequelize
		.sync({ force: true })
		.then(response => {
			console.log(`Database & tables created!`);
			console.log(response, 'Database from the config');
		})
		.catch(error => console.log('error when sync', error));
};

export default sequalizeSync;
