const express=require("express");
const app=express();
const {connectToMongoDb}=require("./connectMongoDb");
const {checkForAutentication,restrictTo}=require("./middleWares/authMiddleWare");
const cookieParser=require("cookie-parser");
const port=4002;
const path=require("path");
const urlRoutes=require("./routes/urlRoutes");
const staticRoutes=require("./routes/staticRoutes");
const userRoutes=require("./routes/userRoutes");
connectToMongoDb("mongodb://127.0.0.1:27017/url-shortnerTrue").then(()=>console.log("mongoDB connected")).catch((error)=>console.log("mongoDB is not connected due to some error"));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAutentication);//all time 
//routes
app.use("/url",restrictTo(["NORMAL"]),urlRoutes); 
app.use("/",staticRoutes);
app.use("/user",userRoutes);
app.listen(port,()=>console.log(`server started at http://localhost:${port}/login`));