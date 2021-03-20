import express from "express";
import { ItemToCart, ItemById, ItemByEmail, deleteItem } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post('/', ItemToCart);
cartRouter.get('/', ItemByEmail);
cartRouter.get('/:id', ItemById);
cartRouter.delete("/:id", deleteItem);

export default cartRouter;