import  express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app=express();

app.use(cors({
    origin:process.env.CORS_LINK,
    credentials:true
}))
app.use(express.json({limit:'16kb'}))//to accept json
app.use(express.urlencoded({limit:'16kb',extended:true}))//to accept different types of url i.e example%20/example
app.use(express.static("public"))
app.use(cookieParser())//for configuring cookies on user browser only which server can add or remove
export {app}