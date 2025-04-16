import mongoose,{mongo, Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
videoFile:{
    types:String,  // cloudinary url
    required: true
  
},
thumbnail:{  
    types:String,  // cloudinary url
    required: true
},
title:{
    types:String,  // cloudinary url
    required: true
},
description:{
    types:String,  // cloudinary url
    required: true
},
duration:{
    types:Number,  // cloudinary url
    required: true
},
views : {
    types:String,  // cloudinary url
    default:0
    
},
isPublished:{
    types:Boolean,
    defauit:true
},
owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
}

    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video", videoSchema )