const { Router } = require("express");

const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/:id", reviewsController.createReview);
router.delete("/id", reviewsController.removeReview);
router.get("/book/:id", reviewsController.getReviewsByBook);

module.exports = router;
