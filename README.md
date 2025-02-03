# patient-data
This project is a React application that uses Redux for state management and allows listing, viewing details, editing, and adding users by consuming the API https://63bedcf7f5cfc0949b634fc8.mockapi.io/users.

🚀 Prerequisites

Before starting, make sure you have the following installed:

* Node.js (version 14 or higher)

* Git

* A code editor like VS Code


📥 Clone the repository

To download the source code from GitHub, open a terminal and run the following command:

git clone https://github.com/Violeta-Fuentes/patient-data.git

# Navigate to the project directory
cd patient-data


📦 Install Dependencies

Run the following command to install the necessary dependencies:

npm install


🏃‍♂️ Run the Project

To start the application in development mode, use the following command:

npm start

This will start a server at http://localhost:3000/ where you can view the application in your browser.


✅ Main Features

✔ List users retrieved from the API.
✔ View user details in a modal.
✔ Edit user data.
✔ Add new users.
✔ Form validations.
✔ Success and error notifications without external libraries.


# Design Decisions & Tools Used 

🎨 Design Decisions:

* React & Redux: Used for state management and component-based architecture, making it easier to handle user data updates dynamically.

* Modular Structure: Components and Redux slices are organized into separate folders to improve maintainability and scalability.

* Form Validations: Implemented without external libraries to ensure user input integrity while keeping the project lightweight.

* Dynamic Modal: The modal adjusts its height based on content, improving user experience.

* Notifications System: Custom success and error messages are implemented without third-party libraries for better control over UI feedback.

🎨 Tools & Libraries Used:

* React: Core library for building the UI.

* Redux: State management solution for handling user data and application state.

* Redux Toolkit: Simplifies Redux implementation and improves performance.

* React Hooks: Used for managing component state efficiently.

* Fetch API: Built-in method for making API requests.

* CSS Modules: Provides scoped styles to prevent conflicts.
