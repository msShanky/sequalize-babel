import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.send('Yayyy !!!').status(200);
});

export default router;
