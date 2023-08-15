const express = require('express');
const app = express();
const port = 3000;

// Import the db.js module to establish the MongoDB connection
require('./db');

app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
