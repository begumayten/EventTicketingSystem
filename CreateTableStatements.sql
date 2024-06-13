CREATE TABLE User(
    user_id INTEGER,
    user_name VARCHAR (255) NOT NULL,
    user_password VARCHAR (255) NOT NULL,
    user_email VARCHAR (255) NOT NULL,
    user_balance DOUBLE,
    cart_id INTEGER,
    PRIMARY KEY(user_id),
    INDEX (cart_id) 
);

CREATE TABLE Event (
    event_id INTEGER,
    event_name VARCHAR (255) NOT NULL,
    event_date DATE,
    event_time TIME,
    event_adress VARCHAR (255) NOT NULL,
    event_category VARCHAR (255) NOT NULL,
    PRIMARY KEY(event_id)
);

CREATE TABLE Ticket (
    ticket_id INTEGER,
    ticket_price DOUBLE,
    cart_id INTEGER,
    PRIMARY KEY(ticket_id),
    FOREIGN KEY (cart_id) REFERENCES User(cart_id)
);

CREATE TABLE Transaction (
    transaction_id INTEGER,
    transaction_amount DOUBLE,
    transaction_date DATE,
    PRIMARY KEY(transaction_id),
    user_id INTEGER,
    ticket_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (ticket_id) REFERENCES Ticket(ticket_id)
);

CREATE TABLE Event_Has_Tickets (
    event_id INTEGER,
    ticket_id INTEGER,
    FOREIGN KEY (event_id) REFERENCES Event(event_id),  
    FOREIGN KEY (ticket_id) REFERENCES Ticket(ticket_id), 
    PRIMARY KEY(event_id, ticket_id)
);

