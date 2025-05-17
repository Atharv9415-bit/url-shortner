const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    e_mail:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"NORMAL",
    }


},{timestamps:true});
const userModel=mongoose.model("users",userSchema);
module.exports=userModel;