import mongoose, { Schema, model } from "mongoose";
 const lawyerschema=new Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:[true,"please enter the user id "]
    },
    documents:{
        type:String,
        require:[true,"please select the documents"]
    },
    status:{
        type:String,
        enum:['pending','approved','rejected'],
        default:"pending"
    },

    adminnotes:{
        type:String,
        
    }
 },{
    timestamps:true
 })
 const lawyermodel=model("Lawyerrmodel",lawyerschema);
 export default lawyermodel;
