# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Task-tastic App

This project is a simple todo application built with React and Vite. It includes a form for adding new tasks, a dynamic list of todo items, and essential functionalities for managing your tasks effectively.

## Project Structure

The project is organized as follows:
* src/App.jsx: The main React component for the todo app.
* src/components/Form/Form.jsx: Component for the todo form.
* src/components/TodoItem/TodoItem.jsx: Component for displaying a single todo item.
* src/utils/getSubheading.js: Utility function for generating subheadings.
* src/Button/Button.jsx: Reusable button component.
* CSS modules for styling components.

## Features

1. **Add New Tasks:**
   - Utilize the form to add new tasks to your todo list easily.

2. **Delete Tasks:**
   - Remove completed or unnecessary tasks from your list with a single click.

3. **Mark Tasks as Done:**
   - Keep track of completed tasks by marking them as done.

4. **Real-time Updates:**
   - Experience real-time updates and changes thanks to Vite's Hot Module Replacement (HMR).

## Available Scripts

* npm run dev: Runs the app in development mode.
* npm run build: Builds the app for production.


### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Link](https://nodejs.org/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/MalgKa/taskTastic.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd taskTastic
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Development Server

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. **Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the app.**


## Deployments

The app is deployed on Netlify. Any changes pushed to the main branch will trigger automatic deployments.

## [Live Demo](https://task-tastic.netlify.app)