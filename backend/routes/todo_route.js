const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  getTodoById,
  insertTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo_controller");

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.post("/", insertTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
