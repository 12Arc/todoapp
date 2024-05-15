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
  const {task} = req.body
  try{
    const query = 'INSERT INTO todo (task) VALUES($1) RETURNING *';
    const values = [task]

    const newTodo = await pool.query(query,values)
    res.json(newTodo.rows[0])
  }catch(err){
    console.error(err.message)
  }
})
