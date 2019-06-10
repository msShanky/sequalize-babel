import { Router } from 'express';

/* product page. */

const productRoute = ({ product }) => {
	const productApi = Router();
	productApi.get('/', async (req, res) => {
		try {
			const productData = await product.findAll();
			res.status(200).json({ message: 'Successfully Retreived Data for product', product: productData });
		} catch (error) {
			res.status(422).json({ message: 'Cannot Retreive the data for product', error });
		}
	});
	productApi.post('/', async (req, res) => {
		try {
			const productData = await product.create(req.body);
			res.status(200).json({ message: 'Successfully Retreived Data for product', product: productData });
		} catch (error) {
			res.status(422).json({ message: 'Failure creating product', error });
		}
	});

	return productApi;
};

export default productRoute;
