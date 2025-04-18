import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
app.use(cors(
    //write for kaha se request lena hai
    {
        origin: process.env.CORS_ORIGIN,
        credentials:true
    }
))
//to jada except as json

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))


//routes import

import userRouter from './routes/user.routes.js'



//routes declaration
app.use('/api/v1/users', userRouter)


export {app}