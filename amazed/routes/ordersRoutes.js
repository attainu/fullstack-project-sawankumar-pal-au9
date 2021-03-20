import express from "express";
import { newOrder, allOrders, ordersByEmail, ordersById, updateOrder, deleteOrder } from "../controllers/ordersController.js";

const orderRouter = express.Router();

orderRouter.post('/', newOrder);
orderRouter.get('/', ordersByEmail);
orderRouter.get('/all', allOrders);
orderRouter.get('/:id', ordersById);
orderRouter.delete('/:id', deleteOrder);
orderRouter.patch("/:id", updateOrder);

export default orderRouter;