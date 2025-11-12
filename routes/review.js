const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require('../controllers/reviews.js');






//Review route to create a new review //Post Route
router.post("/", validateReview, isLoggedIn, wrapAsync(reviewController.createReview));

//Delete route to delete a particular review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router;