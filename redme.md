
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
   git clone <repository-url>
   cd frontend
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

- Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Build

- Build the app for production:

  ```bash
  npm run build
  ```

---

Feel free to customize this template further based on your specific project details and requirements.