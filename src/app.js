import  express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
app.use(cors({
    origin:process.env.CORS_LINK,
    credentials:true
}))
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({limit:'16kb',extended:true}))
app.use(express.static("public"))
app.use(cookieParser())
const app=express();

export {app}