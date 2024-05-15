const Pool = require("pg").Pool;
const pool = new Pool({
    user : "postgres",
    host: "localhost",
    database: "pern",
    password: "Ammi@4662",
    post: 5432,
    
});

pool.connect((err)=>{
    if(err){
        console.error('connection error', err.stack)
    }
    
})





module.exports = pool