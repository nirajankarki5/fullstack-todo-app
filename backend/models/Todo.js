const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must provide Title"],
    trim: true,
  },

  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
