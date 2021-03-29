import express from 'express';
import { getSubCategories, allSubcategories } from '../controllers/subCategoryController.js';

const subCategoryRouter = express.Router();

subCategoryRouter.get('/:categoryNumber', getSubCategories);
subCategoryRouter.get('/', allSubcategories);

export default subCategoryRouter;