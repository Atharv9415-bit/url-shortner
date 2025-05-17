
const jwt=require("jsonwebtoken");
const secretKey="atharv.singh1234567890"
function setUser(user){
   const payLoad={
      _id:user._id,
      e_mail:user.e_mail,
      role:user.role,
   }
   return jwt.sign(payLoad,secretKey);
}
function getUser(token){
   try {
      return jwt.verify(token,secretKey);
      
   } catch (error) {
      return null;
      
   }
}
module.exports={
    setUser,
    getUser,
}