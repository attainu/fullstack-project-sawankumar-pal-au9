import mongoose from "mongoose";
import validator from "validator";
const CouponSchema = mongoose.Schema({
    couponName:String,
    couponCode:String,     
    createdDate:String,
    category:String,
    categoryNumber:Number,
    discountPercent: String,
    expiryDate:String,
    usedBy: [{ type:String }]
});

const coupons = new mongoose.model('coupons',CouponSchema);
export default coupons;