
import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    imageUrl: String,	
    phone:Number,	
    location:String,
    role: String,
    isActive: Boolean,
    provider:String,
    googleId: String,
    facebookId: String
})

const users = new mongoose.model('users',UserSchema);

export default users