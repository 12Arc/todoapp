const Pool = require("pg").Pool;
const pool = new Pool({
    user : "postgres",
    host: "localhost",
    database: "pern",
    
    
})





module.exports = pool