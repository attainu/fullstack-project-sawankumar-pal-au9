import mongoose from "mongoose";
import validator from "validator";
const CartSchema = mongoose.Schema({
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
        unique: [true,"Email is already registered"],
        validate(value){
          if(!validator.isEmail(value)){
            throw new Error("Please enter a valid Email !")
          }
        }
    },
    product:{
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
        paymentMode:String
    }

})

const cart = new mongoose.model('cart', CartSchema);

export default cart