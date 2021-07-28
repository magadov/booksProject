const Review = require("../models/Review.model");

module.exports.reviewsController = {
  createReview: async (req, res) => {
    try {
      const { text, name } = req.body;
      await Review.create({
        text,
        name,
        book: req.params.id,
      });
      res.json("Рецензия успешно добавлена");
    } catch (e) {
      res.json(e.message);
    }
  },

  removeReview: async (req, res) => {
    try {
      await Review.findByIdAndRemove(req.params.id);
      return res.json("Рецензия успешно удалена");
    } catch (e) {
      res.json(e.message);
    }
  },

  getReviewsByBook: async (req, res) => {
    try {
      const review = await Review.find({ book: req.params.id });
      res.json(review);
    } catch (e) {
      res.json(e.message);
    }
  },
};
