const mongoose=require("mongoose");
const { type } = require("os");
const urlShema= new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    vistHistory:[{timeStaps:{type:Number,}}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
},{timestamps:true})
const url=mongoose.model("url",urlShema);
module.exports=url;
