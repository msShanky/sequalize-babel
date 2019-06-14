import { Router } from 'express';

// TODO:abstract all the basic crud to a function

// const retailerRoute = Router();
const retailerRoute = ({ Retailer }) => {
	const retailerApi = Router();
	retailerApi.get('/', async (req, res) => {
		try {
			const retailerData = await Retailer.findAll();
			res.status(200).json({ message: 'Successfully Retreived Data for retailer', retailer: retailerData });
		} catch (error) {
			res.status(422).json({ message: 'Cannot Retreive the data for Retailer', error });
		}
	});
	retailerApi.post('/', async (req, res) => {
		try {
			const retailerCreated = await Retailer.create(req.body);
			res.status(200).json({ message: 'Successfully Retreived Data for retailer', retailer: retailerCreated });
		} catch (error) {
			res.status(422).json({ message: 'Failure creating retailer', error });
		}
	});

	return retailerApi;
};
/* Retailer page. */

export default retailerRoute;
