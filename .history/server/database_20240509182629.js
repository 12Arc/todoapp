const {Client} = require('pg');
const pool = new Client({
    user : "postgres",
    host: "localhost",
    database: "pern",
    password: "Ammi@4662",
    post: 5432,
    
});

module.exports = pool