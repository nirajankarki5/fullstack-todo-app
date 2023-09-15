// let todos = require("../data");
const Todo = require("../models/Todo");

// Get all todo data
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Get single todo by ID
const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id });
    if (!todo) {
      return res.status(404).json({ msg: `No todo found with id: ${id} ` });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Insert todo
const insertTodo = async (req, res) => {
  console.log(req.body);

  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Update todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(404).json({ msg: `No todo found with id: ${id} ` });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: id });
    if (!todo) {
      return res.status(404).json({ msg: `No todo found with id: ${id} ` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  insertTodo,
  updateTodo,
  deleteTodo,
};
