let todos = require("../data");

// Get all todo data
const getAllTodos = (req, res) => {
  res.status(200).json(todos);
};

// Get single todo by ID
const getTodoById = (req, res) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === Number(id));
  res.status(200).json(todo);
};

// Insert todo
const insertTodo = (req, res) => {
  console.log(req.body);
  const newData = req.body;

  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ msg: "Please provide todo data" });
  }
  todos = [...todos, newData];
  res.status(200).json(todos);
};

// Update todo
const updateTodo = (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    return res.status(404).json({ msg: "Error!!! Not Found" });
  }
  const updatedTodo = { ...todo, ...body };
  const index = todos.indexOf(todo);
  todos[index] = updatedTodo;

  res.status(200).json(todos);
};

// Delete todo
const deleteTodo = (req, res) => {
  const { id } = req.params;

  const newTodos = todos.filter((todo) => todo.id !== Number(id));
  res.status(200).json(newTodos);
};

module.exports = {
  getAllTodos,
  getTodoById,
  insertTodo,
  updateTodo,
  deleteTodo,
};
