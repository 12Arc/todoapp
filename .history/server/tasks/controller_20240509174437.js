const Pool = require("../database")

const getTasks = (req,res)=>{
    pool.query("SELECT FROM * todo")
}

module.exports = {
    getTasks
}