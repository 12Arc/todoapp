const Pool = require("pg").Pool;
const pool = new Pool({
    user : "postgres",
    host: "localhost",
    database: "pern",
    password: "Ammi@4662",
    post: 5432,
    
})





module.exports = pool