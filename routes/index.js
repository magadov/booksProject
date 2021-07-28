const { Router } = require("express");

const router = Router();

router.use("/books", require("./books.route"));
router.use("/genres", require("./genres.route"));
router.use("/reviews", require("./reviews.route"));

module.exports = router;
