const express=require("express");
const router=express.Router();
const {userSignUp,userSignIn}=require("../controllers/userController");
router.post("/",userSignUp);
router.post("/login",userSignIn);
module.exports=router;

