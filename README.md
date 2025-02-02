# Task Manager

A lightweight Task Manager (To-Do App with Reminders) that allows users to manage tasks, set reminders, and track progress.

## Features

- Create, edit, and delete tasks.
- Set reminders and notifications (using Go for reminders).
- Database for persistent storage.
- Simple, clean UI.

## Project Structure

task-manager/ │── backend/ │ ├── python-backend/ │ ├── java-backend/ │ └── go-notifications/ │── frontend/ │ ├── react-frontend/ │ └── vanilla-js-frontend/ │── database/ │ ├── schema.sql │ ├── migrations/ │── docs/ │ ├── API_Documentation.md │ ├── Screenshots/ │ ├── architecture-diagram.png │── .gitignore │── README.md


## Setup Instructions

### Prerequisites

1. **Backend**: Python (FastAPI/Django), Java (Spring Boot), or Go (for notifications).
2. **Frontend**: React or Vanilla JS (HTML/JS).
3. **Database**: PostgreSQL or MySQL.

### Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Mecktro/task-manager.git
   cd task-manager

Database Setup:
Set up your PostgreSQL or MySQL database server.
Create a new database for your Task Manager.
Run database/schema.sql to create the necessary tables.

    psql -U yourusername -d yourdbname -f database/schema.sql

Frontend Setup:
  If you're using the React frontend, navigate to frontend/react-frontend/ and install dependencies:

    cd frontend/react-frontend
    npm install
  To run the React app:

    npm start

  For the Vanilla JS frontend, open frontend/vanilla-js-frontend/index.html in your browser.

Backend Setup:

  Python:

  Navigate to backend/python-backend/.
  Install required dependencies:

    pip install -r requirements.txt

Run the Python backend:

    uvicorn app.main:app --reload

Java:

  Navigate to backend/java-backend/.
  Build and run the Java backend with Spring Boot (or any setup you prefer).

Go (for notifications):

  Navigate to backend/go-notifications/.
  Build and run the Go backend for handling reminders.

        go run main.go

  Running the App:
        Open your browser and access the frontend. If you're using React, the app should run on http://localhost:3000/.
        The API will be available at http://localhost:8000/api (adjust according to your backend).

API Documentation

Refer to docs/API_Documentation.md for detailed API documentation on how to interact with the backend.
Architecture

For a visual overview of the system's architecture, refer to docs/architecture-diagram.png.
License

This project is licensed under the MIT License.
Contributing

Feel free to fork this project and submit pull requests! You can add new features, fix bugs, or improve documentation.
Acknowledgements

Thanks to all contributors and open-source libraries used in this project.


---

### Summary of Generated Files:

- **.gitignore**: Ensures unnecessary files are ignored by Git.
- **README.md**: A complete readme for the Task Manager project, including setup instructions, project structure, features, and usage.

Let me know if you need any further adjustments or additions!
