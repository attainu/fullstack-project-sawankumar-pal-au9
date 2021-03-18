import express from 'express';
import { addNew, getCategories } from '../controllers/categoryController.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getCategories);
categoryRouter.post('/add', addNew);

export default categoryRouter;