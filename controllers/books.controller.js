const Book = require("../models/Book.model");

module.exports.booksController = {
  createBook: async (req, res) => {
    const { name, author, genre } = req.body;

    if (!name) {
      return res.json("Необходимо указать название книги");
    }

    if (!author) {
      return res.json("Необходимо указать автора книги");
    }
    try {
      await Book.create({
        name,
        author,
        genre,
      });
      res.json("Книга успешно добавлена");
    } catch (e) {
      res.json(e.message);
    }
  },

  removeBook: async (req, res) => {
    try {
      const deleted = await Book.findByIdAndRemove(req.params.id);

      if (!deleted) {
        return res.json("Не улалось удалить книгу. Укажите верный ID");
      }
      return res.json("Книга успешно удалена");
    } catch (e) {
      res.json(e.message);
    }
  },

  editBook: async (req, res) => {
    const { name, author, genre } = req.body;

    try {
      const edited = await Book.findByIdAndUpdate(
        req.params.id,
        { name, author, genre },
        { new: true }
      );
      res.json("edited");
    } catch (e) {
      res.json(e.message);
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      return res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },

  getBooks: async (req, res) => {
    try {
      const book = await Book.find({});
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },

  getBooksByGenres: async (req, res) => {
    try {
      const book = await Book.find({ genre: req.params.id });
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
};
