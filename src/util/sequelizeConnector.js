/* eslint-disable no-console */
import db from '../models';

const retailerData = [
	{
		retailerType: 1,
		logoBase64: '',
		retailerName: "Sam's Club",
		logoCDN: '/static/sams-hor.jpg',
		membershipIdValidationRegex: '^SA[0-9]{4,5}$',
		membershipIdName: 'Loyalty ID',
	},
	{
		retailerName: "BJ's",
		retailerType: 1,
		logoCDN: '/static/bjs.jpg',
		membershipIdValidationRegex: '^BJ[0-9]{3,5}$',
		membershipIdName: 'Membership ID',
		logoBase64: '',
	},
	{
		retailerType: 1,
		retailerName: 'Caizins',
		logoCDN: '/static/cainz.jpg',
		membershipIdValidationRegex: '^CA[0-9]{4,5}$',
		membershipIdName: 'Loyalty ID',
		logoBase64: '',
	},
	{
		retailerType: 1,
		retailerName: 'Toysrus',
		logoCDN: '/static/toysrus.jpg',
		membershipIdValidationRegex: '^TRS[0-9]{3,5}$',
		membershipIdName: 'Membership ID',
		logoBase64: '',
	},
];

const bindingData = [{ bindingStatus: 'Bounded' }, { bindingStatus: 'UnBounded' }];

const sequalizeSync = () => {
	// db.sequelize
	// 	.authenticate()
	// 	.then(() => {
	// 		console.log('Successfull Connected to database');
	// 	})
	// 	.catch(error => console.log('error when connecting to database', error));
	db.sequelize
		.sync({ force: true })
		.then(() => {
			// Initialise Required data for initial deployment
			const { Retailer, BindingStatus } = db;
			Retailer.bulkCreate(retailerData)
				.then(() => console.log('created all retailer data'))
				.catch(() => console.log('error creating bulk data for retailer'));
			BindingStatus.bulkCreate(bindingData)
				.then(() => console.log('created all bindingStatus data'))
				.catch(() => console.log('error creating bulk data for binding status'));
		})
		.catch(error => console.log('error when syncing database', error));
};

export default sequalizeSync;
