const express = require("express");
const app = express();

const todoRouter = require("./routes/todo_route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", todoRouter);

app.listen(5000, () => {
  console.log("Server listening at port 5000");
});
