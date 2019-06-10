import { Router } from 'express';

/* retailerTransaction page. */

const retailerTransactionRoute = ({ retailertransaction }) => {
	const retailerTransactionApi = Router();
	retailerTransactionApi.get('/', async (req, res) => {
		try {
			const retailerTransactionData = await retailertransaction.findAll();
			res.status(200).json({
				message: 'Successfully Retreived Data for retailerTransaction',
				retailerTransaction: retailerTransactionData,
			});
		} catch (error) {
			res.status(422).json({ message: 'Cannot Retreive the data for retailerTransaction', error });
		}
	});
	retailerTransactionApi.post('/', async (req, res) => {
		try {
			const retailerTransactionData = await retailertransaction.create(req.body);
			res.status(200).json({
				message: 'Successfully Retreived Data for retailerTransaction',
				retailerTransaction: retailerTransactionData,
			});
		} catch (error) {
			res.status(422).json({ message: 'Failure creating retailerTransaction', error });
		}
	});

	return retailerTransactionApi;
};

export default retailerTransactionRoute;
