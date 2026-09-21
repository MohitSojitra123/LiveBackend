const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const Student=require("../Backend/Model/student.model.js");
const connectDB=require("../Backend/config/db.js") 


const app=express();

app.use(express.json());


connectDB();


app.get("/",(req,res)=>{
        res.send("Working Properlyyyy : ");
})

app.get("/AllStudent",async(req,res)=>{
   
      const AllStudent=await Student.find();
      
      res.status(200).json({
        Success:true,
        Message:"Get All Student",
        Data:AllStudent
      })

})


app.post("/AddStudent",async(req,res)=>{
    const data1=req.body;
    
     const newStudent=await Student.create(data1);

      res.status(201).json({
          Success:true,
          Message:"New Student Created : ",
          Data:newStudent
      })
})


app.delete("/DeleteStudent/:id",async(req,res)=>{
      const deleteid=req.params.id;

       const Deletestudent=await Student.findByIdAndDelete(deleteid);
       
        res.status(200).send({
            Success:true,
            Message:"Delete Student :",
            Data:Deletestudent
        })

})


app.patch("/UpdateStudent/:id",async(req,res)=>{
       const UpdateStudentid=req.params.id;
       const UpdateStudent=req.body;

       const NewUpdateStudent=await Student.findByIdAndUpdate(UpdateStudentid,UpdateStudent);

        res.status(200).json({
            success:true,
            Message:"Student Data Is Update : ",
            NewUpdateStudent
        })
})


// app.listen(5000,()=>{
//     console.log("Server Running : http://localhost:5000");
// })

module.exports = app;