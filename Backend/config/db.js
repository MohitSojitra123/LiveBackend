const mongoose=require("mongoose");
require("dotenv").config();


const connectDB = async () => {

    try {

        if (mongoose.connection.readyState === 1) {
            return;
        }

        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB Atlas Connected Successfully");

    } catch (error) {

        console.error("MongoDB Atlas Connection Error:", error.message);

        throw error;
    }
};


module.exports=connectDB;