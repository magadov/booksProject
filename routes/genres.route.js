const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.post("/", genresController.createGenres);
router.delete("/:id", genresController.removeProduct);
router.get("/", genresController.getGenres);

module.exports = router;
