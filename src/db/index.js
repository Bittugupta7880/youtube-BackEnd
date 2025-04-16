import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";


const connectDB=async()=>{
    try{
    const connectionInstence=
      await  mongoose.connect(`${process.env.MONGODB_URI}/
        ${DB_NAME}`)
        console.log(`\n MOngoDB connected !! DB HOST: ${connectionInstence.connection.host}`);

    }
    catch(error){
        console.log("MONGODB CONNECTION FAIL",error);
        process.exit(1)
    }
}
export default connectDB