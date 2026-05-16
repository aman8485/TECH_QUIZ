import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    clerkId: {
        type:String,
        required:true,
        unique:true
    },
    fullName: {
        type:String
    },
    email: {
        type:String,
        required:true
    },
    role: {
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    isLoggedIn: {
        type:Boolean,
        default:false
    }

},{timestamps:true});

const user=mongoose.model("User", userschema);
export default user;