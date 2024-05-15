const express = require('express')
const cors = require ('cors')
const app = express()
const pool = require("./database")
app.use(cors())
app.use(express.json())

const port = 8080

app.listen(port,() => {
  console.log(`server is running on ${port}`)
})

//Routes
app.post('/todos', async(req,res)=>{
  
  try{
    const {task} = req.body
    

    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description])
    res.json(newTodo.rows[0])
  }catch(err){
    console.error(err.message)
  }
})

pool.on('connect',()=>{
  console.log('Connected to database')
})

pool.on('error', (err) => {
  console.error('Error connecting to PostgreSQL:', err);
});
