const express = require("express");
const cors = require("cors");
require("express-async-errors");

const todoRouter = require("./routes/todo_route");
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

require("dotenv").config();

const app = express();

// Enable all CORS requests
app.use(cors());

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", todoRouter);
app.use(notFound);

app.use(errorHandler);

// first checks database. If database has no errors, server runs
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(5000, console.log("Server listening at port 5000"));
  } catch (error) {
    console.log(error);
  }
};

start();
