import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
  
 
},{timestamps:true});
export const Contactpage = mongoose.model("Contactpage", contactSchema);