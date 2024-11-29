import mongoose from "mongoose";
export const connectDB=async()=> {
    await mongoose.connect('mongodb+srv://nam:nam@thefoodnam.mpnf5.mongodb.net/TheFoodNam').then(()=>console.log("DB connected"));
}


