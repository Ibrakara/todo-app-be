# Todo App Backend

This is a simple backend for a Todo application built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete (CRUD) todos.
- RESTful API endpoints.
- MongoDB integration using Mongoose.
- Environment variable configuration using `dotenv`.
- CORS support for cross-origin requests.

## Project Structure

.env
.gitignore
app.js
package.json
models/
Todo.js
routes/
todos.js

## Prerequisites

- Node.js (v16 or higher)
- MongoDB instance (local or cloud)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ibrakara/todo-app-be.git
   cd todo-app-be
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://admin:admin@backenddb.7iq3ss5.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. The server will run on `http://localhost:3000` by default.

## API Endpoints

### Base URL: `/api/todos`

#### Get All Todos

- **GET** `/`
- Response: List of all todos.

#### Get a Todo by ID

- **GET** `/:id`
- Response: A single todo object.

#### Create a Todo

- **POST** `/`
- Request Body:
  ```json
  {
    "title": "Sample Todo",
    "completed": false
  }
  ```
- Response: Created todo object.

#### Update a Todo

- **PUT** `/:id`
- Request Body:
  ```json
  {
    "title": "Updated Todo",
    "completed": true
  }
  ```
- Response: Updated todo object.

#### Delete a Todo

- **DELETE** `/:id`
- Response: Success message.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling for Node.js.
- **dotenv**: Environment variable management.
- **cors**: Middleware for handling CORS.

## License

This project is licensed under the ISC License.
