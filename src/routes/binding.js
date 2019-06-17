import { Router } from 'express';
import { Op } from 'sequelize';

const handleFindingByPampersID = async (req, res, binding) => {
	try {
		const { pampersId } = req.query;
		const dataForPampersID = await binding.findAll({ where: { pampersLoyaltyId: pampersId } });
		res.status(200).json({ message: `Retreived data for sent id ${pampersId}`, binding: dataForPampersID });
	} catch (error) {
		res.status(422).json({ message: 'Cannot Retreive the data for binding', error });
	}
};

const handleUnbinding = async (req, res, binding) => {
	try {
		const { unBindingId } = req.body;
		// Binding Status 2 is configured as UnBinded
		// If the status is already unbinded then dont update the data
		const dataForUnbinding = await binding.findOne({
			where: { bindingId: unBindingId, [Op.not]: [{ bindingStatusId: 2 }] },
			raw: true,
		});
		if (!dataForUnbinding) throw new Error(`Cannot Unbind Id : ${unBindingId}. Because the status in already unbinded `);
		await binding.update({ ...dataForUnbinding, retailerMembershipId: '', bindingStatusId: 2 }, { where: { bindingId: unBindingId } });
		res.status(200).json({ message: `Successfully update the value for ${unBindingId}` });
	} catch (error) {
		res.status(422).json({ message: error.message || 'Cannot Retreive the data for binding' });
	}
};

// TODO: abstract all the basic crud to a function

/* Binding route */
const bindingRoute = ({ Binding, BindingStatus }) => {
	const bindingApi = Router();
	bindingApi.get('/', async (req, res) => {
		// Check if there are query params if so return filtered data
		if (Object.keys(req.query).length > 0 && req.query.pampersId) {
			handleFindingByPampersID(req, res, Binding);
		} else {
			try {
				const bindingData = await Binding.findAll();
				res.status(200).json({ message: 'Successfully Retreived Data for binding', binding: bindingData });
			} catch (error) {
				res.status(422).json({ message: 'Cannot Retreive the data for binding', error });
			}
		}
	});
	// Rebinding Data
	bindingApi.put('/', async (req, res) => {
		const { bindingId } = req.body;
		try {
			await Binding.update({ ...req.body, bindingStatusId: 1 }, { where: { bindingId } });
			res.send(200).send({ message: 'Success' });
		} catch (error) {
			res.send(422).send({ message: 'Failure' });
		}
	});

	// Update Unbiniding data
	bindingApi.put('/unbind', async (req, res) => {
		handleUnbinding(req, res, Binding, BindingStatus);
	});

	bindingApi.post('/', async (req, res) => {
		try {
			// Binding Status 1 is configured as Binded
			const bindingData = await Binding.create({ ...req.body, bindingStatusId: 1 });
			res.status(200).json({ message: 'Success', binding: bindingData });
		} catch (error) {
			res.status(422).json({ message: 'Failure creating binding', error: JSON.stringify(error) });
		}
	});

	return bindingApi;
};

export default bindingRoute;
