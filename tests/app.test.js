const mongoose = require("mongoose");
const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");

let mongoServer;

beforeAll(async () => {
  // Start an in-memory MongoDB server
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  // Connect to the in-memory MongoDB
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // Close the MongoDB connection and stop the in-memory server
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Todo API", () => {
  it("should return an empty list of todos", async () => {
    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should create a new todo", async () => {
    const newTodo = { title: "Test Todo", completed: false };
    const res = await request(app).post("/api/todos").send(newTodo);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe(newTodo.title);
    expect(res.body.completed).toBe(newTodo.completed);
  });

  it("should fetch a specific todo by ID", async () => {
    const newTodo = { title: "Fetch Todo", completed: false };
    const createRes = await request(app).post("/api/todos").send(newTodo);
    const todoId = createRes.body._id;

    const fetchRes = await request(app).get(`/api/todos/${todoId}`);
    expect(fetchRes.statusCode).toBe(200);
    expect(fetchRes.body.title).toBe(newTodo.title);
    expect(fetchRes.body.completed).toBe(newTodo.completed);
  });

  it("should update a todo", async () => {
    const newTodo = { title: "Update Todo", completed: false };
    const createRes = await request(app).post("/api/todos").send(newTodo);
    const todoId = createRes.body._id;

    const updatedTodo = { title: "Updated Todo", completed: true };
    const updateRes = await request(app)
      .put(`/api/todos/${todoId}`)
      .send(updatedTodo);
    expect(updateRes.statusCode).toBe(200);
    expect(updateRes.body.title).toBe(updatedTodo.title);
    expect(updateRes.body.completed).toBe(updatedTodo.completed);
  });

  it("should delete a todo", async () => {
    const newTodo = { title: "Delete Todo", completed: false };
    const createRes = await request(app).post("/api/todos").send(newTodo);
    const todoId = createRes.body._id;

    const deleteRes = await request(app).delete(`/api/todos/${todoId}`);
    expect(deleteRes.statusCode).toBe(200);

    const fetchRes = await request(app).get(`/api/todos/${todoId}`);
    expect(fetchRes.statusCode).toBe(404);
  });
});
