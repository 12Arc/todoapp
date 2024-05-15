const express = require('express')
const app = express()
const port = 3000
const taskroutes = require('./tasks/route')
import connect from 


app.get("/", (req,res)=>{
  res.send("Hello World")
})

app.use(express.json())

app.use('/todolist', taskroutes)
app.listen(port, ()=>{
  console.log(`Server is running on ${port}`)
})


