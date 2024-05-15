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
    

    const newTodo = await pool.query("INSERT INTO todo (task) VALUES($1) RETURNING *",
    [task])
    res.json(newTodo.rows[0])
  }catch(err){
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
})

