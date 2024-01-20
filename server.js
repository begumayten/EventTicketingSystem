// server.js
const express = require('express');
const mysql = require('mysql2');
const app = express();

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'your-hostname',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
