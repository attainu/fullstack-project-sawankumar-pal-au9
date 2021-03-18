import express from "express";
import { ItemToCart, ItemById, ItemByName, deleteItem } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post('/', ItemToCart);
cartRouter.get('/:name', ItemByName);
cartRouter.get('/:id', ItemById);
cartRouter.delete("/:id", deleteItem);

export default cartRouter;