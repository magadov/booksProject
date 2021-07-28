const Genre = require("../models/Genre.model");

module.exports.genresController = {
  createGenres: async (req, res) => {
    const { name, description } = req.body;
    try {
      await Genre.create({
        name,
        description,
      });
      return res.json("Жанр успешно добавлен");
    } catch (e) {
      res.json(e.message);
    }
  },

  removeProduct: async (req, res) => {
    try {
      const deleted = await Genre.findByIdAndRemove(req.params.id);
      return res.json("Жанр успешно удалён");
    } catch (e) {
      res.json(e.message);
    }
  },

  getGenres: async (req, res) => {
    try {
      const genres = await Genre.find({});
      res.json(genres);
    } catch (e) {
      res.json(e.message);
    }
  },
};
