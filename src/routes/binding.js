import { Router } from 'express';

/* Binding route */
const bindingRoute = ({ binding }) => {
	const bindingApi = Router();
	bindingApi.get('/', async (req, res) => {
		try {
			const bindingData = await binding.findAll();
			res.status(200).json({ message: 'Successfully Retreived Data for binding', binding: bindingData });
		} catch (error) {
			res.status(422).json({ message: 'Cannot Retreive the data for binding', error });
		}
	});
	bindingApi.post('/', async (req, res) => {
		try {
			const bindingData = await binding.create(req.body);
			res.status(200).json({ message: 'Successfully Retreived Data for binding', binding: bindingData });
		} catch (error) {
			console.log(error, 'error');
			res.status(422).json({ message: 'Failure creating binding', error: JSON.stringify(error) });
		}
	});

	return bindingApi;
};

export default bindingRoute;
