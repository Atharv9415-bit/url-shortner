const express=require("express");
 const {genrateShortUrl,sendUserToWebSite,handlegetAnalytics}=require("../controllers/urlController");
const router=express.Router();
router.post("/",genrateShortUrl);
router.get("/:shortId",sendUserToWebSite);
router.get("/analytics/:shortId",handlegetAnalytics);
module.exports=router;