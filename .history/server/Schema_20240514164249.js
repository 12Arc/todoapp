const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task:{
      type: String,
      required: [true, "Please enter the task"]
    }
    checked: { type: Boolean, default: false }
  })
  
  const Task = mongoose.model('Task', taskSchema, "todolist");

  module.exports = Task

