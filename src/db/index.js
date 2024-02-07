import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

 const connectdb= async ()=>{
    try {
      const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`${connectionInstance.connection.host}hello this is host connection`);
    } catch (error) {
        console.log("Error in connection with Mongo",error);
        process.exit(1);
    }
}
export default connectdb