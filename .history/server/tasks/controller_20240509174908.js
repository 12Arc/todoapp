const Pool = require("../database")

const getTasks = async (req,res)=>{
    try{
        const {task} = req.body 
        const allTodo = await pool.query(
            "SELECT FROM * todo"
        )
        res.json()
    }
}

module.exports = {
    getTasks
}