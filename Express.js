app.get('/api/events', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT * FROM Event'); // Update table name to 'Event'
    connection.end();
    res.json(rows); // Assuming that the query result itself is an array
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
