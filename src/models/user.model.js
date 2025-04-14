import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from  "jsonwebtoken";


const userSchema= new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index:true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index:true
        },
        _id:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        avatar:{
            type:String, //cloudinary url
            required:true,
        },
        coverImage:{
            type:String , //cloudinary url
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,'password is required']

        },
        refreshToken:{
            type:String,
        }
    },
    {timestamps:true}
)

// middilware
//before save (pre)mean pahale incrept the password
userSchema.pre("save",async function (next) {
//in function execution take the time
if(!this.isModified("password")) return next();

this.password = bcrypt.hash(this.password,10 )
//what do incript , how many round
next()
})
 
// for password check from data bae
userSchema.methods.isPasswordCorrect= async function
(password){
    //bcrypt.compare(userEnterpassword in string , encrypted password from database )
  return await  bcrypt.compare(password , this.password)
  
}
//build method according to purpose

userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
           _id: this._id,
           email:this.email,
           username:this.username,
           fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
           _id: this._id
          
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn:  REFRESH_TOKEN_EXPIRY
        }

    )
}

export const User =mongoose.model("User" , userSchema)