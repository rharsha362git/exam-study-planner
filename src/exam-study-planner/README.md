# Exam Study Planner

## Overview
The Exam Study Planner is a React application designed to help students efficiently plan and manage their exam preparation. Users can add subjects, view their details, and keep track of their study progress.

## Features
- Add new subjects for exam preparation.
- View a dashboard of all subjects with their details.
- Persistent storage of subjects using local storage.
- Responsive and user-friendly interface.

## Project Structure
```
exam-study-planner
├── public
│   └── index.html
├── src
│   ├── index.jsx
│   ├── App.jsx
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── SubjectForm.jsx
│   │   └── SubjectCard.jsx
│   ├── styles
│   │   ├── Navbar.css
│   │   ├── Dashboard.css
│   │   └── SubjectForm.css
│   └── utils
│       └── storage.js
├── package.json
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd exam-study-planner
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.