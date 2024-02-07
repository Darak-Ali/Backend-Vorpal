import express from "express"
const app =express();
const asynchandler= (requestHandler )=>{
    (req,res,next)=>{
        Promise.resolve(req,res,next).catch((err)=>next(err))
    }
}
// const asynchandler=(fn)=>async(req,res,next)=>{
// try {
//     await fn(req,res,next)
// } catch (error) {
//     res.status(error.code||500).json({success:false,message:error.message})
// }
// }