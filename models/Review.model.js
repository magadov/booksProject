const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  book: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book",
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
