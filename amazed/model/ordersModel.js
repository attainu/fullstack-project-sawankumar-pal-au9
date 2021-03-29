import mongoose from "mongoose";
import validator from "validator";
const OrdersSchema = mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        minlength: 3,
        required:true
    },
    userEmail:{
        type: String,
        required: true,
    },
    orderDetails:{
        firstName:{
            type:String,
            required: true,
        },
        lastName:{
            type:String,
            required: true,
        },
        houseAddress:{
            type:String,
            required: true,
        },
        apartment:String,
        city:String,
        state:String,
        country:String,
        postCode:String,
        phone:{
            type: Number,
            minlength: 10,
            maxlength: 13,
            required: true,
            unique: true
          },
        email:{
            type: String,
            required: true,
        },
        paymentMode:String,
        transactionId:String,
        transactionAmount:Number
    },
    productDetails:{
        asin:{
            type:String,
            required: true,
        },
        productTitle:String,
        beforePrice:Number,
        saving:Number,
        currentPrice:Number,
        quantity:Number,
        totalPrice:Number,
        couponDiscount:Number,
        grandTotal:Number
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