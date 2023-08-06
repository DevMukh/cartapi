import mongoose from "mongoose";
const connection=async()=>{
    try{
        const url="mongodb+srv://admin:admin123@database.jnmg4od.mongodb.net/"
const mongoconnection= await mongoose.connect(url);
console.log("mongodb connection successfully");
    }catch(e){
        console.log("Error in Mongoose connection", e.message);
    };
}
export default connection