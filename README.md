# Todo App Backend

This is a simple backend for a Todo application built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete (CRUD) todos.
- RESTful API endpoints.
- MongoDB integration using Mongoose.
- Environment variable configuration using `dotenv`.
- CORS support for cross-origin requests.

## Project Structure

```
.env
.gitignore
app.js
package.json
models/
└── Todo.js
routes/
└── todos.js
```

## Prerequisites

- Node.js (v16 or higher)
- MongoDB instance (local or cloud)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ibrakara/todo-app-be.git
   cd todo-app-be
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start your local MongoDB server**:

   Make sure MongoDB is installed. You can start it using:

   ```bash
   brew services start mongodb-community@7.0
   ```

   > If you prefer manual startup, run:
   >
   > ```bash
   > mongod
   > ```

4. **Create a `.env` file** in the root directory with the following content:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/todo-db
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. The server will run on `http://localhost:3000` by default.

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

## Testing

To ensure the application works as expected, you can run tests for the API endpoints. Follow these steps:

### **Run the tests**:

```bash
npm test
```

## License

This project is licensed under the ISC License.
