# Database Setup

This folder contains the SQL schema and migrations for the Task Manager project.

## schema.sql

`schema.sql` contains the initial SQL schema for creating the tasks table. It defines the columns and basic structure for storing task data.

### Migrations

Migrations will be used to handle changes to the database schema as the project evolves. For now, this folder is empty, but new migration files will be added to modify or update the database structure as features are implemented.

## Setup

1. Create a new database in your PostgreSQL or MySQL database server.
2. Run the schema script to create the necessary tables:
   ```bash
   psql -U yourusername -d yourdbname -f schema.sql
