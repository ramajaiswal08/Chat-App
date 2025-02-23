<<<<<<< HEAD
import jwt from "jsonwebtoken"



export const generateToken  = (userId , res) => {

 const token = jwt.sign({userId} , process.env.JWT_SECRET,{
    expiresIn : "7d"
 });
 res.cookie("jwt",token , {
    maxAge : 7*24*60*60*1000 ,//Ms
    httpOnly : true,
    sameSite : "strict",
    secure : process.env.NODE_ENV !== "devlopment",

 });
 return token;
=======
import jwt from "jsonwebtoken"



export const generateToken  = (userId , res) => {

 const token = jwt.sign({userId} , process.env.JWT_SECRET,{
    expiresIn : "7d"
 });
 res.cokkie("jwt",token , {
    maxAge : 7*24*60*60*1000 ,//Ms
    httpOnly : true,
    sameSite : "strict",
    secure : process.env.NODE_ENV !== "devlopment",

 });
 return token;
>>>>>>> 108db9fb6070fdfbcdcff7aa7def3a218930971f
}