import { Router } from 'express';
import retailerRoute from './retailer';
import db from '../models';
import bindingRoute from './binding';
import bindingStatusRoute from './bindingStatus';
import productRoute from './product';
import retailerTransactionRoute from './retailerTransaction';

const api = Router();

api.use('/retailer', retailerRoute(db));
api.use('/binding', bindingRoute(db));
api.use('/binding-status', bindingStatusRoute(db));
api.use('/product', productRoute(db));
api.use('/retailer-transaction', retailerTransactionRoute(db));

api.get('/', (req, res) => {
	res.send('YAAAAY !!!, Home Page is working !!!!!!!!');
});

export default api;
