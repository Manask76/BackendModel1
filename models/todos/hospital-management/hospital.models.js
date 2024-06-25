import mongoose from "mongoose";
const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:Number,
        required:true
    },
    addressLine2:{
        type:String,
        required:true
    },
    city:{
        type:Number,
        required:true,
    },
    pincode:{
        type:String,
        required:true
    },
    specializeIn:[
        {
            type:String
        }
    ]
},{timestamps:true})
export const Hospital=mongoose.model("Hospital",hospitalSchema)