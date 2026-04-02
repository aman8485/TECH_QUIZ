import mongoose from "mongoose";

export const connectDB = async () => {
  
    await mongoose.connect("mongodb+srv://dixitaman8485_db_user:mVOv6qBRbmhypH8R@cluster0.9xty7bx.mongodb.net/QuizWeb")
    .then(()=>{
      console.log("DB CONNECTED")
    })
  
};
