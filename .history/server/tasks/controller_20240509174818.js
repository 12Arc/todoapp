const Pool = require("../database")

const getTasks = async (req,res)=>{
    try{
        const {task} = req.body 
        const newtodo = await pool.query
    }
}

module.exports = {
    getTasks
}