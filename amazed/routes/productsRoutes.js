import express from "express";
import { getProducts, addNew, getProdsByCategory, addMultiple } from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.post('/', addNew);
productsRouter.post('/mult', addMultiple);
productsRouter.get('/', getProducts);
productsRouter.get('/category', getProdsByCategory);

export default productsRouter;