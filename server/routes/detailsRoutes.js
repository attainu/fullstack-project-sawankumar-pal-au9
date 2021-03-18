import express from 'express';
import { addNew, getDetail, deleteDetail } from '../controllers/detailsController.js';
import details from '../model/detailsModel.js';

const detailsRouter = express.Router();

detailsRouter.post('/', addNew);
detailsRouter.get('/:asin', getDetail);
detailsRouter.delete('/delete/:asin', deleteDetail);


export default detailsRouter;