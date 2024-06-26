const express = require('express');
const path = require('path'); // Ensure this line is present
const cors = require('cors');
const taskroutes = require('./tasks/route');
const connect = require('./database');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client', 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// API Routes
app.use('/todolist', taskroutes);

// Example API route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the API' });
});



// Connect to the database and start the server
connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.log('Cannot connect to the server');
  }
}).catch((error) => {
  console.log("Invalid database connection..");
});
