
import mongoose  from "mongoose";

async function connect(){
   const uri = 'mongodb+srv://diwateaa:Ammi@cluster0.8uhvtwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   try{
    const db = await mongoose.connect(uri)
    console.log("Database Connected")
   }catch(error){
    console.error(error.message)
   }
}



const taskSchema = new mongoose.Schema({
  task:{
    type: String,
    required: [true, "Please enter the task"]
  }
})

const Task = mongoose.model('Task', taskSchema, );

export default {connect, Task};