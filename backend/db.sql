CREATE DATABASE mylove_db;

USE mylove_db;

CREATE TABLE user_actions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    passcode VARCHAR(10),
    action VARCHAR(50),
    message TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);