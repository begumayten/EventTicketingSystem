// app.js

const db = require('./db');

// Example query
db.query('SELECT * FROM events', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});
