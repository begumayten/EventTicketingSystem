
INSERT INTO User (user_id, user_name, user_password, user_email, user_balance, cart_id)
VALUES (1, 'JohnDoe', 'password123', 'johndoe@example.com', '1000', 501),
       (2, 'JaneSmith', 'password456', 'janesmith@example.com', '2000', 502),
       (3, 'AliceJohnson', 'alicepass789', 'alicejohnson@example.com', '800',503),
       (4, 'MikeBrown', 'mikepass101', 'mikebrown@example.com', '1500', 504),
       (5, 'EmmaWilson', 'emmawilson321', 'emmawilson@example.com', '1900', 505),
       (6, 'RobertMiller', 'robertmiller654', 'robertmiller@example.com', '2500', 506);
       
       
INSERT INTO Ticket (ticket_id, ticket_price, cart_id)
VALUES (401, 100.00, 501),
       (402, 50.00, 502),
       (403, 120.00, 503),
       (404, 80.00, 504),
       (405, 60.00, 505),
       (406, 200.00, 506),
       (407, 200.00, NULL),
       (408, 200.00, NULL),
       (409, 100.00, NULL),
       (410, 100.00, 502),
       (411, 100.00, 503),
       (412, 50.00, 506),
       (413, 120.00, NULL),
       (414, 80 , NULL),
       (415, 80 , 501),
       (416, 60 , NULL),
       (417, 200 ,NULL),
       (418, 200, NULL),
       (419, 100, NULL);


INSERT INTO Transaction (transaction_id, transaction_amount, transaction_date, user_id, ticket_id)
VALUES (101, 100.00, '2024-01-15', 1, 401),
       (102, 50.00, '2024-01-20', 2, 402), 
       (103, 120.00, '2024-01-25', 3, 403),
       (104, 80.00, '2024-02-05', 4, 404),
       (105, 60.00, '2024-02-15', 5, 405),
       (106, 200.00, '2024-02-20', 6, 406);


INSERT INTO Event (event_id, event_name, event_date, event_time, event_adress, event_category)
VALUES (301, 'Rock Concert', '2024-02-25', '19:00', '123 Music Ave', 'Concert'),
       (302, 'Shakespeare Play', '2024-03-10', '18:00', '456 Drama St', 'Theater'),
       (303, 'Jazz Festival', '2024-04-20', '17:00', '789 Jazz Blvd', 'Concert'),
       (304, 'Tech Conference', '2024-05-05', '09:00', '101 Tech Park', 'Conference'),
       (305, 'Art Exhibition', '2024-06-15', '14:00', '202 Art Lane', 'Art'),
       (306, 'Classical Music Concert', '2024-10-20', '19:30', '606 Symphony St', 'Concert'),
       (307, 'Film Festival', '2024-08-10', '17:00', '404 Cinema Road', 'Movie'),
       (308, 'New Year Gala', '2025-01-01', '20:00', '808 Celebration Hall', 'Festival'),
       (309, 'Marathon', '2024-11-15', '06:00', '606 Athletic Ave', 'Sports') ;


INSERT INTO Event_Has_Tickets (event_id, ticket_id)
VALUES (301, 401),
       (301, 410),
       (301, 411),
       (302, 402),
       (302, 412),
       (303, 403),
       (303, 413),
       (304, 404),
       (304 ,414),
       (304, 415),
       (305, 405),
       (305, 416),
       (306, 406),
       (307, 407),
       (307, 417),
       (308, 408),
       (308, 418),
       (309, 409),
       (309, 419);