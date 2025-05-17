const express=require("express");
const url=require("../models/urlModel");
const {restrictTo}=require("../middleWares/authMiddleWare");
const router=express.Router();
router.get("/admin/urls",restrictTo(["ADMIN"]),async(req,res)=>{
  const allUsers=await url.find({});
  return res.render("home",{
      users:allUsers,
  });

})
router.get("/",restrictTo(["NORMAL","ADMIN"]),async(req,res)=>{
  const allUsers=await url.find({createdBy:req.user._id});
    return res.render("home",{
        users:allUsers,
    });
});
router.get("/signUp",async(req,res)=>{
  return res.render("signUp");
})
router.get("/login",async(req,res)=>{
  return res.render("login");
})
module.exports=router;