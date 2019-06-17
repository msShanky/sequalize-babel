import { Router } from 'express';
import { Op } from 'sequelize';

const handleFindingByPampersID = async (req, res, binding) => {
	try {
		const { pampersId } = req.query;
		const dataForPampersID = await binding.findAll({ where: { PampersLoyaltyId: pampersId } });
		res.status(200).json({ message: `Retreived data for sent id ${pampersId}`, binding: dataForPampersID });
	} catch (error) {
		res.status(422).json({ message: 'Cannot Retreive the data for binding', error });
	}
};

const handleUnbinding = async (req, res, binding, bindingstatus) => {
	try {
		const { unBindingId } = req.body;
		const bindingStatusData = await bindingstatus.findAll({ where: { BindingStatus: 'Unbinded' }, raw: true });
		const unBindingStautsId = bindingStatusData && bindingStatusData[0].bindingStatusId;
		// If the status is already unbinded then dont update the data
		const dataForUnbinding = await binding.findOne({
			where: { BindingId: unBindingId, [Op.not]: [{ bindingStatusId: unBindingStautsId }] },
			raw: true,
		});
		if (!dataForUnbinding) throw new Error(`Cannot Unbind Id : ${unBindingId}. Because the status in already unbinded `);
		await binding.update(
			{ ...dataForUnbinding, retailerMembershipId: '', bindingStatusId: unBindingStautsId },
			{ where: { BindingId: unBindingId } }
		);
		res.status(200).json({ message: `Successfully update the value for ${unBindingId}` });
	} catch (error) {
		res.status(422).json({ message: error.message || 'Cannot Retreive the data for binding' });
	}
};

// TODO:abstract all the basic crud to a function

/* Binding route */
const bindingRoute = ({ Binding, BindingStatus }) => {
	const bindingApi = Router();
	bindingApi.get('/', async (req, res) => {
		// Check if there are query params if so return filtered data
		if (Object.keys(req.query).length > 0) {
			// eslint-disable-next-line no-unused-expressions
			req.query.pampersId && handleFindingByPampersID(req, res, Binding);
			// eslint-disable-next-line no-unused-expressions
			// req.query.unbindingId && handleUnbinding(req, res, Binding, BindingStatus);
		} else {
			try {
				const bindingData = await Binding.findAll({ include: [BindingStatus] });
				res.status(200).json({ message: 'Successfully Retreived Data for binding', binding: bindingData });
			} catch (error) {
				res.status(422).json({ message: 'Cannot Retreive the data for binding', error });
			}
		}
	});
	bindingApi.put('/unbind', async (req, res) => {
		handleUnbinding(req, res, Binding, BindingStatus);		
	});
	bindingApi.post('/', async (req, res) => {
		try {
			const bindingStatusData = await BindingStatus.findAll({ where: { BindingStatus: 'Binded' }, raw: true });
			const bindingStautsId = bindingStatusData && bindingStatusData[0].bindingStatusId;
			const bindingData = await Binding.create({ ...req.body, bindingStatusId: bindingStautsId });
			res.status(200).json({ message: 'Successfully Retreived Data for binding', binding: bindingData });
		} catch (error) {
			res.status(422).json({ message: 'Failure creating binding', error: JSON.stringify(error) });
		}
	});

	return bindingApi;
};

export default bindingRoute;
