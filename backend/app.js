const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo_route");

const app = express();

// Enable all CORS requests
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", todoRouter);

app.listen(5000, () => {
  console.log("Server listening at port 5000");
});
