import express from 'express';
import { newOrders, newPayment, getPayment } from '../controllers/transactionController.js';

const transRouter = express.Router();

transRouter.post('/order', newOrders);
transRouter.post('/payment', newPayment);
transRouter.get('/:id', getPayment);

export default transRouter;


