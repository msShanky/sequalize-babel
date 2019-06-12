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
		const { unbindingId } = req.query;
		const bindingStatusData = await bindingstatus.findAll({ where: { BindingStatus: 'Unbinded' }, raw: true });
		const unBindingStautsId = bindingStatusData && bindingStatusData[0].BindingStatusId;
		// If the status is already unbinded then dont update the data
		const dataForUnbinding = await binding.findOne({
			where: { BindingId: unbindingId, [Op.not]: [{ BindingStatusId: unBindingStautsId }] },
			raw: true,
		});
		if (!dataForUnbinding) throw new Error(`Cannot Unbind Id : ${unbindingId}. Because the status in already unbinded `);
		await binding.update({ ...dataForUnbinding, BindingStatusId: unBindingStautsId }, { where: { BindingId: unbindingId } });
		res.status(200).json({ message: `Successfully update the value for ${unbindingId}` });
	} catch (error) {
		res.status(422).json({ message: error.message || 'Cannot Retreive the data for binding' });
	}
};

// TODO:abstract all the basic crud to a function

/* Binding route */
const bindingRoute = ({ binding, bindingstatus }) => {
	const bindingApi = Router();
	bindingApi.get('/', async (req, res) => {
		// Check if there are query params if so return filtered data
		if (Object.keys(req.query).length > 0) {
			// if (req.query.pampersId) {
			// 	handleFindingByPampersID(req, res, binding);
			// } else if (req.query.unbindingId) {
			// 	handleUnbinding(req, res, binding, bindingstatus);
			// }
			// eslint-disable-next-line no-unused-expressions
			req.query.pampersId && handleFindingByPampersID(req, res, binding);
			// eslint-disable-next-line no-unused-expressions
			req.query.unbindingId && handleUnbinding(req, res, binding, bindingstatus);
		} else {
			try {
				const bindingData = await binding.findAll();
				res.status(200).json({ message: 'Successfully Retreived Data for binding', binding: bindingData });
			} catch (error) {
				res.status(422).json({ message: 'Cannot Retreive the data for binding', error });
			}
		}
	});
	bindingApi.post('/', async (req, res) => {
		try {
			const bindingStatusData = await bindingstatus.findAll({ where: { BindingStatus: 'binded' }, raw: true });
			const bindingStautsId = bindingStatusData && bindingStatusData[0].BindingStatusId;
			const bindingData = await binding.create({ ...req.body, BindingStatusId: bindingStautsId });
			res.status(200).json({ message: 'Successfully Retreived Data for binding', binding: bindingData });
		} catch (error) {
			console.log(error, 'error');
			res.status(422).json({ message: 'Failure creating binding', error: JSON.stringify(error) });
		}
	});

	return bindingApi;
};

export default bindingRoute;
