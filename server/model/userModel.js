
import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    isActive: Boolean,
    provider:String,
    google: Object
})

const users = new mongoose.model('users',UserSchema);

export default users