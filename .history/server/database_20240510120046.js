
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
      console.error('Error executing query', err.stack);
  } else {
      console.log('Connection successful:', res.rows);
  }
  pool.end();
});

module.exports = pool;
