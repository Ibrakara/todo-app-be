import express from "express";
import Todo from "../models/Todo.js";
import mongoose from "mongoose";

export const router = express.Router();

// Get All
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Get One
router.get("/:id", async (req, res) => {
  const { id: todoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(todoId)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  try {
    const todo = await Todo.findById(todoId);
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  const { id: todoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(todoId)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  try {
    const todo = await Todo.findByIdAndUpdate(todoId, req.body, {
      new: true,
    });
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  const { id: todoId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(todoId)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
