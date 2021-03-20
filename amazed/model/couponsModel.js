import mongoose from "mongoose";
import validator from "validator";
const CouponSchema = mongoose.Schema({
    couponName:String,
    couponCode:String,     
    createdDate:String,
    category:String,
    discount: String,
    expiryDate:String
})
const coupons = new mongoose.model('coupons',CouponSchema);
export default coupons;