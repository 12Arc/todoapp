const express = require('express')
const app = express()
const port = 3000
const taskroutes = require('./tasks/route')
import connect from './database'


app.get("/", (req,res)=>{
  res.send("Hello World")
})

app.use(express.json())

app.use('/todolist', taskroutes)

connect().then(()=>{
  try{
    app.listen(port, ()=>{
      console.log(`Serber is running on ${port}`)
    })
  }catch(error){
    console.log('Cannot coonect to the server')
  }
}).catch((error)=>{
  console.lof()
})

