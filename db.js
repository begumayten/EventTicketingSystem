
const mysql = require('mysql2');

// Replace these with your actual database connection details
const connection = mysql.createConnection({
  host: 'your-hostname',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
