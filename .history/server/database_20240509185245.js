const {Client} = require('pg');
const connectionString = 'host=localhost port=5432 dbname=pern user=postgres password=Ammi@4662 connect_timeout=10 sslmode=prefer';
const client = new Client({
    connectionString: connectionString,
  });
module.exports = client