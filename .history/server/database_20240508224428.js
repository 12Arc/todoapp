const Pool = require("pg").Pool
const pool = new Pool({
    user : "postgres",
    password : "Ammi@4662",
    host : "localhost",
    port :  "5432",
    database : "pern"
})

pool.

module.exports = pool