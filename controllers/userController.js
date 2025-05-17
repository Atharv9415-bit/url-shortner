const userModel=require("../models/userModel");
const {v4:uuidv4}=require('uuid');
const{setUser}=require("../serves/auth");
async function userSignUp(req,res){
    const {name,e_mail,password}=req.body;
    if(!name || !e_mail || !password){
        return res.render("signUp",{
           error:"please enter all the fields",
        })
    }
    await userModel.create({
        name:name,
        e_mail:e_mail,
        password:password,

    })
    return res.redirect("/login");
    
}
async function userSignIn(req,res){
    const {e_mail,password}=req.body;
    if( !e_mail || !password){
        return res.render("login",{
            err:"Please enter all fields",
        })
    }
   
   
   const user= await userModel.findOne({e_mail,password});
    
   if(!user){
    return res.render("login",{
        error:"please enter correct e_mail or password",
    })

   }
    
   const token=setUser(user);
   res.cookie("token",token);
   res.redirect("/");
   
  
    
}
module.exports={userSignUp,userSignIn};