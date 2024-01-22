const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Add this line

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors()); // Use the cors middleware

// MySQL database connection configuration
const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'emre12',
    database: 'ticket'
};

app.get('/api/events', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT * FROM Event'); // Correct table name to 'Event'
    connection.end();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
