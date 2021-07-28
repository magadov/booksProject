const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  genre: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genre",
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
