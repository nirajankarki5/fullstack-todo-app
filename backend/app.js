const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo_route");
const startDb = require("./db/connect");

const app = express();

// Enable all CORS requests
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", todoRouter);

// first checks database. If database has no errors, server runs
const start = async () => {
  try {
    await startDb();
    app.listen(5000, console.log("Server listening at port 5000"));
  } catch (error) {
    console.log(error);
  }
};

start();
