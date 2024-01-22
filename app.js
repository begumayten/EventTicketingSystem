const db = require('./db');
const bcrypt = require('bcrypt');

async function getAllEvents() {
  try {
    console.log('Executing query: SELECT * FROM Event');
    const results = await db.query('SELECT * FROM Event');
    return results;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
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
    db.end();
  }
}

main();
