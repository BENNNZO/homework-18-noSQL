const router = require('express').Router();
const { fetchReviews, findReview, postReview, deleteReview, editReview, addReaction, removeReaction } = require('../../controllers/reviewsController.js');

router.route('/')
    .get(fetchReviews)
    .post(postReview)

router.route('/:reviewId')
    .get(findReview)
    .put(editReview)
    .delete(deleteReview)

router.route('/:reviewId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;