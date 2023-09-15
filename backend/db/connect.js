const mongoose = require("mongoose");

// const connectionString = "mongodb://127.0.0.1:27017/todo";

// mongoose
//   .connect(connectionString)
//   .then(() => {
//     console.log("Connnected to the database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const startDb = (url) => {
  return mongoose.connect(url);
};

module.exports = startDb;
