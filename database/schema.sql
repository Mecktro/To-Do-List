-- Schema for Task Manager Database

-- Create table for tasks
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,                      -- Unique identifier for each task
    task_name VARCHAR(255) NOT NULL,             -- Task name (required)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Time when the task was created
    completed BOOLEAN DEFAULT FALSE             -- Flag to mark task as completed
);

-- Index for efficient querying of completed tasks
CREATE INDEX idx_completed ON tasks (completed);

-- Sample insert for testing
-- INSERT INTO tasks (task_name, completed) VALUES ('Sample task', false);
