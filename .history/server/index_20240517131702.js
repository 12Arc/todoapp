const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const cors = require('cors')
const taskroutes = require('./tasks/route')
const connect = require('./database')
const path = require('path');


app.get("/", (req,res)=>{
  res.send("Hello World")
})
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use('/todolist', taskroutes)

connect().then(()=>{
  try{
    app.listen(port, ()=>{
      console.log(`Server is running on ${port}`)
    })
  }catch(error){
    console.log('Cannot coonect to the server')
  }
}).catch((error)=>{
  console.log("Invaid database connection..")
})
