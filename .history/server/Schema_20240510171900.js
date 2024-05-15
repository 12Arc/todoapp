const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task:{
      type: String,
      required: [true, "Please enter the task"]
    }
  })
  
  const Task = mongoose.model('Task', taskSchema, "todolist");

