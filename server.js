const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser'); // Add this line for parsing POST request data

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware for parsing POST request data

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'emre12',
    database: 'ticket'
};

// Serve login.html initially
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Handle login POST request
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Perform your authentication logic here using username and password
    // If authentication is successful, redirect to index.html
    // Otherwise, you can handle unsuccessful login appropriately

    // For demonstration purposes, assuming authentication is always successful
    if (username === 'demo' && password === 'demo') {
        res.redirect('/index');
    } else {
        res.send('Login unsuccessful. Please try again.');
    }
});

// Serve index.html after successful login
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/events', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM Event');
        connection.end();
        res.json(rows);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
