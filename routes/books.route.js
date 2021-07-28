const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();

router.post("/", booksController.createBook);
router.delete("/:id", booksController.removeBook);
router.patch("/:id", booksController.editBook);
router.get("/:id", booksController.getBookById);
router.get("/", booksController.getBooks);
router.get("/genres/:id", booksController.getBooksByGenres);

module.exports = router;
