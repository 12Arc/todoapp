const Pool = require("../database")

const getTasks = (req,res)=>{
    pool.query("SELECT FROM * tdo")
}

module.exports = {
    getTasks
}