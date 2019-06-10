import { Router } from 'express';

/* Binding Status route */
const bindingStatusRoute = ({ bindingstatus }) => {
	const bindingStatusApi = Router();
	bindingStatusApi.get('/', async (req, res) => {
		try {
			const bindingStatusData = await bindingstatus.findAll();
			res.status(200).json({ message: 'Successfully Retreived Data for binding status', bindingStatus: bindingStatusData });
		} catch (error) {
			res.status(422).json({ message: 'Cannot Retreive the data for binding status', error });
		}
	});
	bindingStatusApi.post('/', async (req, res) => {
		try {
			const bindingStatusData = await bindingstatus.create(req.body);
			res.status(200).json({ message: 'Successfully Retreived Data for binding status', bindingStatus: bindingStatusData });
		} catch (error) {
			console.log(error, 'error');
			res.status(422).json({ message: 'Failure creating binding status', error: JSON.stringify(error) });
		}
	});

	return bindingStatusApi;
};

export default bindingStatusRoute;
