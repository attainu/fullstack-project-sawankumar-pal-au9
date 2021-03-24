import mongoose from "mongoose";
import validator from "validator";
const ContactSchema = mongoose.Schema({
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
    phone:{
        type: String,
        required: true 
    },  
    comment:{
        type: String,
        required: true 
    }


})

const contacts = new mongoose.model('contacts', ContactSchema);

export default contacts;