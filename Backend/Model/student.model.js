const mongoose=require("mongoose");


const Student_Schema=new mongoose.Schema({
          name:{
               type:String,
               required:true
          },
          age:{
            type:Number,
            required:true
          },
          mobilenumber:{
            type:String,
            required:true
          },
          email:{
            type:String,
            required:true
          }
},{timestamps:true});

module.exports=mongoose.model("AllStudent",Student_Schema);
