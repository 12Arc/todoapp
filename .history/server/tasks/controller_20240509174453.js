const Pool = require("../database")

const getTasks = (req,res)=>{
    pool.query("SELECT FROM * todo", (error, result))
}

module.exports = {
    getTasks
}