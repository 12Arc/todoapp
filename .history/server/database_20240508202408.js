const Pool = require("pg").pool
const pool = new Pool({
    user : "postgres",
    password : "Ammi@4662",
    host : "localhost",
    port :  "5432",
    database : "pern"
})

export default pool;