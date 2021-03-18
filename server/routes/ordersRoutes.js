import express from "express";
import { newOrder, allOrders, ordersByName, ordersById, updateOrder } from "../controllers/ordersController.js";

const orderRouter = express.Router();

orderRouter.post('/', newOrder);
orderRouter.get('/', allOrders);
orderRouter.get('/:name', ordersByName);
orderRouter.get('/:id', ordersById);
orderRouter.patch("/:id", updateOrder);

export default orderRouter;