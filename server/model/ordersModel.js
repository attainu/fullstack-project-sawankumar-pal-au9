import mongoose from "mongoose";
const OrdersSchema = mongoose.Schema({
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
    orderDetails:{
        firstName:String,
        lastName:String,
        houseAddress:String,
        apartment:String,
        city:String,
        state:String,
        country:String,
        postCode:String,
        phone:String,
        email:String
    },
    productDetails:{
        asin:String,
        productTitle:String,
        beforePrice:Number,
        saving:Number,
        currentPrice:Number,
        quantity:Number,
        totalPrice:Number,
        paymentMode:String
    },
    orderStatus:String,
    delivered:Boolean,
    coupon:{
        code:String,
        discount:Number,
        expiry:Date
    }

})

const orders = new mongoose.model('orders', OrdersSchema);

export default orders