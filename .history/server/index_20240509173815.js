const express = require('express')
const app = express()
const port = 3000
const taskroutes = require('./tasks/route')

app.get("/", (req,res)=>{
  res.send("Hello World")
})

app.use('/api')
app.listen(port, ()=>{
  console.log(`Server is running on ${port}`)
})
