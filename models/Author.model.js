const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
