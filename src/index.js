// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB()












/*
import express from "express"
const app= express()
//; write for cleaning purpose

;(async()=>{
try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on("error" , (error) => {
    console.log("ERROR: ",error);
    throw error
})

app.listen(process.env.PORT,()=>{
    console.log(`App listing on port ${process.env.PORT}`)
})

}catch(error){
console.log("ERROR:",error)
throw err
}

})()
*/