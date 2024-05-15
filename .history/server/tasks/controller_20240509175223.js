const Pool = require("../database")

const getTasks = async (req,res)=>{
    try{
        const {task} = req.body 
        const allTodo = await Pool.query(
            "SELECT FROM * todo"
        )
        res.json(allTodo.rows)
    }catch(err){
      console.error(err.message)
    }
}

module.exports = {
    getTasks
}