# EventTicketingSystem

## Setup and Running Instructions

1. **Import Tables to MySQL:**
   - Import the provided SQL scripts to create the necessary tables and load data in MySQL, or import the provided tables directly.

2. **Update Database Password:**
   - Open `server.js` in your code editor.
   - Locate the database configuration section.
   - Change the password in the configuration to match your MySQL password.

3. **Run the Server:**
   - Open your terminal.
   - Navigate to the project directory.
   - Run the following command:
     ```bash
     node server.js
     ```
   - This will start the server.

4. **Access the Application:**
   - Open your web browser.
   - Go to [http://localhost:3000/](http://localhost:3000/) to access the application.

5. **Logging In:**
   - Use the usernames and corresponding passwords from the "insert into" statements in MySQL script for logging in.
