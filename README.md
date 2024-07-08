
---

# Educational Content Dashboard - Frontend

This project is a simplified educational content dashboard frontend developed using Vite.

## Features

- **User Interface Creation**
  - Developed a responsive UI using Vite for an educational content dashboard.
  - Features include:
    - **Login Page**: Allows users to authenticate and access the dashboard.
    - **Dashboard**: Displays a list of available courses.
    - **Course Detail Page**: Shows practice questions (static content) for each course.
  
- **Interactive Features**
  - **Answer Submission**: Users can submit answers to questions.
  - **Submission Feedback**: Displays a "Submission received" message upon successful submission.
  
- **Mock Data Usage**
  - Utilized mock data for courses and questions to simulate functionality.

## Technologies Used

- **Frontend Framework**: React with Vite
- **State Management**: Redux Toolkit (for managing application state)
- **Styling**: Chakra UI (for UI components and styling)
- **API Calls**: Axios (for making HTTP requests to the backend)

## Project Structure

```
frontend/
├── public/           # Static assets
├── src/              # Source files
│   ├── components/   # Reusable components
│   ├── features/     # Redux slices (e.g., auth, courses)
│   ├── redux/        # redux store
│   ├── utils/        # Utility functions
│   ├── App.jsx       # Main application component
│   └── index.jsx     # Entry point
├── .env              # Environment variables (optional)
├── package.json      # Package dependencies and scripts
└── README.md         # Project overview, setup instructions, and documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/shailendra7518/pre-test-assignment.git>
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Development

- Start the development server:

  ```bash
  npm run dev
  ```

- Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

### Build

- Build the app for production:

  ```bash
  npm run build
  ```

---



Here is the README file for the backend of your project:

---

# Educational Content Dashboard - Backend

This project is the backend for a responsive educational content dashboard. It is built using Node.js and Express and provides RESTful APIs for user authentication, retrieving courses, and submitting answers to questions.

## Features

- **User Authentication**: Login functionality.
- **Course Retrieval**: APIs to get the list of available courses.
- **Answer Submission**: Mock functionality to receive answers and return a success message.
- **Database**: Stores user details and a list of courses using PostgreSQL or MongoDB.

## Technologies Used

- Node.js
- Express
- MongoDB/PostgreSQL
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB or PostgreSQL database setup

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/shailendra7518/pre-test-assignment.git>
cd <server>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000
DATABASE_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
```

### Running the Server

Start the server by running:

```bash
npm run dev
```

The server will run on `http://localhost:3000`.

## API Documentation

### User Authentication

#### Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```

### Courses

#### Get All Courses

- **URL**: `/api/courses`
- **Method**: `GET`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```

### Answers

#### Submit Answer

- **URL**: `/api/courses/:courseId/submit`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "questionId": "questionId",
    "answer": "answer"
  }
  ```
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```

#### Get All Answers

- **URL**: `/api/courses/answers`
- **Method**: `GET`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```

## Database Schema

### Users

- `userId` (String)
- `email` (String)
- `password` (String)

### Courses

- `courseId` (String)
- `title` (String)
- `description` (String)

### Answers

- `answerId` (String)
- `userId` (String)
- `courseId` (String)
- `questionId` (String)
- `answer` (String)

## Example Queries

### Create a User

```sql
INSERT INTO users (userId, email, password) VALUES ('1', 'user@example.com', 'password');
```

### Get All Courses

```sql
SELECT * FROM courses;
```

## Submission

Provide a GitHub repository link containing all the code, documentation, and additional resources.

---
