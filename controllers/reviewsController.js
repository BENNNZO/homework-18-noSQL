const Review = require('../models/Review')

module.exports = {
    fetchReviews(req, res) {
        Review.find()
        .populate({ path: "reactions" })
        .then((reviews) => {
            console.log('reviews')
            console.log(reviews)
            res.json(reviews)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    findReview(req, res) {
        Review.findOne({ _id: req.params.reviewId })
        .populate({ path: "reactions" })
        .then((reviews) =>
            !reviews
                ? res.status(404).json({ message: 'No reviews with that ID' })
                : res.json(reviews)
        )
        .catch((err) => res.status(500).json(err))
    },

    postReview(req, res) {
        Review.create(req.body)
        .then((reviews) => res.json(reviews))
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
        })
    },

    deleteReview(req, res) {
        Review.findOneAndDelete({ _id: req.params.reviewId })
        .then((reviews) =>
            !reviews
                ? res.status(404).json({ message: 'No review with this id!' })
                : res.json({ message: 'review deleted!' })
        )
        .catch((err) => res.status(500).json(err))
    },

    editReview(req, res) {
        Review.findOneAndUpdate(
            { _id: req.params.reviewId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((reviews) =>
            !reviews
                ? res.status(404).json({ message: 'No review with this id!' })
                : res.json(reviews)
        )
        .catch((err) => res.status(500).json(err))
    },

    addReaction(req, res) {
        Review.findOneAndUpdate(
            { _id: req.params.reviewId },
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        )
        .populate({ path: "reactions" })
        .then((reviewsData) => {
            if (!reviewsData) {
                res.status(404).json({ message: "No reviews with this ID!" })
                return
            }
            res.json(reviewsData)
        })
        .catch((err) => res.status(400).json(err))
    },

    removeReaction(req, res) {
        Review.findOneAndUpdate(
            { _id: req.params.reviewId },
            { $pull: { reactions: { _id: req.body.id } } },
            { new: true }
        )
            .then((reviewsData) => {
                if (!reviewsData) {
                    res.status(404).json({ message: "No reviews with this ID!" })
                    return
                }
                res.json(reviewsData)
            })
            .catch((err) => res.status(400).json(err))
    },
}


