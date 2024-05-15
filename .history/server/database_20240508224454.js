const Pool = require("pg").Pool
const pool = new Pool({
    user : "postgres",
    password : "Ammi@4662",
    host : "localhost",
    port :  "5432",
    database : "pern"
})

pool.on('connect',()=>{
    console.log('Connect')
})

module.exports = pool