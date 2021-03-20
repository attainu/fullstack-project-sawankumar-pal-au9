import express from "express";
import { AddNewCoupon, listCoupons, listCouponsByCat, couponById, deleteItem } from "../controllers/couponsController.js";

const couponsRouter = express.Router();

couponsRouter.post('/', AddNewCoupon);
couponsRouter.get('/', listCoupons);
couponsRouter.get('/category', listCouponsByCat);
couponsRouter.get('/:id', couponById);
couponsRouter.delete("/:id", deleteItem);

export default couponsRouter;
