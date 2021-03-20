import express from 'express';
import { getSubCategories } from '../controllers/subCategoryController.js';

const subCategoryRouter = express.Router();

subCategoryRouter.get('/:categoryNumber', getSubCategories);

export default subCategoryRouter;