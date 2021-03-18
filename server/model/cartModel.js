import mongoose from "mongoose";
const CartSchema = mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    product:{
        asin:String,
        productTitle:String,
        beforePrice:Number,
        saving:Number,
        currentPrice:Number,
        quantity:Number,
        totalPrice:Number,
        paymentMode:String
    }

})

const cart = new mongoose.model('cart', CartSchema);

export default cart;