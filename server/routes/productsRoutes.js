import express from "express";
import { getProducts, addNew, getProductsByName, getProdsById, addMultiple } from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.post('/', addNew);
productsRouter.post('/mult', addMultiple);
productsRouter.get('/', getProducts);
productsRouter.get('/:product', getProductsByName);
// productsRouter.get('/id', getProdsById);

export default productsRouter;
