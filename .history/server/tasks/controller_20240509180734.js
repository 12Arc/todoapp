const Pool = require("../database")

const getTasks = async (req,res)=>{
    try{
       
        const allTodo = await Pool.query(
            "SELECT FROM * todo"
        )
        res.json(allTodo.rows)
    }catch(err){
      
    }
}

module.exports = {
    getTasks
}