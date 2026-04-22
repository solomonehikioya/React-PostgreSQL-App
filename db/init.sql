-- Initializing Database
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    progress INTEGER DEFAULT 0
);

INSERT INTO tasks (title, progress) VALUES 
('Build React App', 65), 
('Learn FastAPI', 20), 
('Deploy to AWS', 0);