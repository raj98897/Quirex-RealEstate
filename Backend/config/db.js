import mongoose from "mongoose"
export const dbConnect=async()=>{
   const conn= await  mongoose.connect(process.env.DB_URI)
   .then((data)=>{
      console.log(`MongoDB connected with server ${data.connection.host}`);
   });
   if(conn){
    console.log("Db connected successfully............"); 
   }
}
