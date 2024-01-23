const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

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
    const [rows] = await connection.query(`
        SELECT DISTINCT E.*, T.ticket_price
        FROM Event E
        JOIN Event_Has_Tickets EHT ON E.event_id = EHT.event_id
        JOIN Ticket T ON EHT.ticket_id = T.ticket_id
    `);
    connection.end();
    res.json(rows);
    } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get the history of events a user has tickets for
app.get('/api/user-event-history/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query(`
            SELECT E.event_name, E.event_date, E.event_time, E.event_adress, E.event_category
            FROM Event E
            JOIN Event_Has_Tickets EHT ON E.event_id = EHT.event_id
            JOIN Ticket T ON EHT.ticket_id = T.ticket_id
            WHERE T.cart_id = (
                SELECT U.cart_id
                FROM User U
                WHERE U.user_id = ?
            )
        `, [userId]);
        connection.end();
        res.json(rows);
    } catch (error) {
        console.error('Error fetching user event history:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Calculates the total revenue generated from ticket sales for a specific event
app.get('/api/event-total-revenue/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query(`
            SELECT E.event_name, SUM(T.ticket_price) AS Total_Revenue
            FROM Event E
            JOIN Event_Has_Tickets EHT ON E.event_id = EHT.event_id
            JOIN Ticket T ON EHT.ticket_id = T.ticket_id
            WHERE E.event_id = ?
            GROUP BY E.event_name
        `, [eventId]);
        connection.end();
        res.json(rows);
    } catch (error) {
        console.error('Error fetching event total revenue:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Gets events that have at least one ticket priced above the average price of all tickets
app.get('/api/events-above-average-price', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query(`
            SELECT E.event_id, E.event_name, E.event_date, E.event_time, E.event_adress, E.event_category
            FROM Event E
            WHERE EXISTS (
                SELECT 1
                FROM Event_Has_Tickets EHT
                JOIN Ticket T ON EHT.ticket_id = T.ticket_id
                WHERE EHT.event_id = E.event_id AND T.ticket_price > (
                    SELECT AVG(ticket_price)
                    FROM Ticket
                )
            )
        `);
        connection.end();
        res.json(rows);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get events that have no tickets sold
app.get('/api/events-with-no-tickets-sold', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query(`
            SELECT E.event_id, E.event_name, E.event_date, E.event_time, E.event_adress, E.event_category
            FROM Event E
            WHERE NOT EXISTS (
                SELECT 1
                FROM Event_Has_Tickets EHT
                JOIN Ticket T ON EHT.ticket_id = T.ticket_id
                JOIN Transaction TR ON T.ticket_id = TR.ticket_id
                WHERE EHT.event_id = E.event_id
            )
        `);
        connection.end();
        res.json(rows);
    } catch (error) {
        console.error('Error fetching events with no tickets sold:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get users who have bought tickets for 'Concert' category events
app.get('/api/users-who-bought-concert-tickets', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query(`
            SELECT DISTINCT U.user_id, U.user_name
            FROM User U
            JOIN Transaction T ON U.user_id = T.user_id
            WHERE T.transaction_id IN (
                SELECT T.transaction_id
                FROM Ticket TK
                JOIN Event_Has_Tickets EHT ON TK.ticket_id = EHT.ticket_id
                JOIN Event E ON EHT.event_id = E.event_id
                WHERE E.event_category = 'Concert'
            )
        `);
        connection.end();
        res.json(rows);
    } catch (error) {
        console.error('Error fetching users who bought concert tickets:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
