
# To-Do List API

## Project Overview

The To-Do List API is a backend project designed to manage tasks and users. It supports CRUD operations for tasks, user authentication, and authorization using JWT tokens. This project includes the following key functionalities:

- User authentication and authorization
- Creating, reading, updating, and deleting tasks
- Filtering tasks by status
- Secure handling of user credentials

## Skills and Technologies Used

- REST API design
- JSON
- Basic authentication middleware
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt for password hashing
- jsonwebtoken for token management

## Getting Started

### Prerequisites

To run this project, you need to have the following installed:

- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AhmadAbdelrazik/todo-list-api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-list-api
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```plaintext
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

### Running the Application

Start the application by running:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

### User Endpoints

- **Signup**
  - **URL:** `/api/signup`
  - **Method:** `POST`
  - **Description:** Register a new user.
  - **Request Body:**
    ```json
    {
      "userName": "string",
      "password": "string",
      "name": "string"
    }
    ```

- **Login**
  - **URL:** `/api/login`
  - **Method:** `POST`
  - **Description:** Authenticate a user and return tokens.
  - **Request Body:**
    ```json
    {
      "userName": "string",
      "password": "string"
    }
    ```

- **Renew Token**
  - **URL:** `/api/renew-token`
  - **Method:** `POST`
  - **Description:** Renew access token using refresh token.
  - **Headers:**
    - `Authorization: Bearer <refreshToken>`

### Task Endpoints

- **Create Task**
  - **URL:** `/api/tasks`
  - **Method:** `POST`
  - **Description:** Create a new task.
  - **Request Body:**
    ```json
    {
      "title": "string",
      "status": "string",
      "endDate": "date",
      "startDate": "date"
    }
    ```

- **Get All Tasks**
  - **URL:** `/api/tasks`
  - **Method:** `GET`
  - **Description:** Retrieve all tasks for the authenticated user. Optionally filter by status.
  - **Query Parameters:**
    - `status: string`

- **Get Task by ID**
  - **URL:** `/api/tasks/:id`
  - **Method:** `GET`
  - **Description:** Retrieve a single task by its ID.

- **Update Task**
  - **URL:** `/api/tasks/:id`
  - **Method:** `PUT`
  - **Description:** Update an existing task.
  - **Request Body:**
    ```json
    {
      "title": "string",
      "status": "string",
      "endDate": "date",
      "startDate": "date"
    }
    ```

- **Delete Task**
  - **URL:** `/api/tasks/:id`
  - **Method:** `DELETE`
  - **Description:** Delete a task by its ID.

