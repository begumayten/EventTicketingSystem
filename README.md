# 🎫 EventTicketingSystem
**Developers:** Begüm Ayten, Gülşah Arslan

## 📚 Introduction

Our project aims to create a realistic database system for event tickets, featuring user management in the User table, transaction handling in the Transaction table, ticket management in the Ticket table, event organization in the Event table, and event-ticket linkage in the Event_Has_Tickets table. This comprehensive system facilitates effective ticketing management for event organizers and users alike. Additionally, our event ticketing database has been populated with synthetic data to ensure thorough testing, including 6 tuples in the User table, 6 tuples in the Transaction table, 19 tuples in the Ticket table, 9 tuples in the Event table, and 19 tuples in the Event_Has_Tickets table.

## 🛠️ Setup and Running Instructions

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
