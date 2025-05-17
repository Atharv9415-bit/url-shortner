const shortid=require("shortid");
const url=require("../models/urlModel");
async function genrateShortUrl(req,res) {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is require"});
    const shortIds=shortid();
    await url.create({
        shortId:shortIds,
        redirectUrl:body.url,
        vistHistory:[],
        createdBy:req.user._id,
    })
    return res.render("home",{
        id:shortIds,
    })
}

  
async function sendUserToWebSite(req,res){
    const shortId=req.params.shortId;
 const entry=await url.findOneAndUpdate({
        shortId
    },{$push:{
        vistHistory:{
            timeStaps:Date.now(),
        },

    },},{new:true}
    );
    res.redirect(entry.redirectUrl);
}
async function handlegetAnalytics(req,res){
    const shortId=req.params.shortId;
    const result = await url.findOne({ shortId });
    if(!result){
        return res.status(400).json({error:"id is incorrct"})
    }
    return res.json({
        totalClicks:result.vistHistory.length,
        analytics:result.vistHistory,
    })
}

module.exports={
    genrateShortUrl,
    sendUserToWebSite,
    handlegetAnalytics
}