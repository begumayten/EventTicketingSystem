const db = require('./db');

async function getAllEvents() {
  try {
    console.log('Executing query: SELECT * FROM Event'); // Update table name to 'Event'
    const results = await db.query('SELECT * FROM Event'); // Update table name to 'Event'
    return results;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}

async function main() {
  try {
    const events = await getAllEvents();
    console.log('Query results:', events);
    // Add additional logic or processing here
  } catch (error) {
    console.error('Error in main function:', error);
  } finally {
    // Ensure to close the database connection after use
    db.end();
  }
}

// Run the main function
main();

