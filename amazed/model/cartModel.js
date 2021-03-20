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
        required: true        
    },
    asin:String,    
    title:String,
    mainImage:String,
    rating:String,   
    price:{
        before_price:Number,
        savings_amount:Number,
        current_price:Number
    }


})

const cart = new mongoose.model('carts', CartSchema);

export default cart