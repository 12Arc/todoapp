
import mongoose  from "mongoose";

async function connect(){
   const uri = 'mongodb+srv://diwateaa:Ammi@cluster0.8uhvtwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   try{
    const db = await mongoose.connect(uri)
    
   }
}