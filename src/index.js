// require ('dotenv').config({path:"./env"})
import dotenv from "dotenv"
import connectdb from "./db/index.js"
import{ app }from "./app.js"
dotenv.config({path:'./env'})
connectdb()
.then(()=>{
  try {
    app.listen(process.env.PORT || 8000,()=>{
      console.log(`Server is running on ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(`ErrorWhile running on port`,error);
    throw error
  }

})
.catch((err)=>{
  console.log(`Issue in connection with Database`,err)
})
// import  Express  from "express";
// const app=Express();
// Another approach for connecting database 
// ;(async ()=>{
//     try{
//    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(error)=>{
//     console.log("error",error)
//     throw error
//    })
//    app.listen(process.env.PORT,()=>{
//     console.log(`app is listening on ${process.env.PORT}`)
//    })
//    }catch(error){
//      console.error("Error:",error)
//      throw err
//    }
// })();
