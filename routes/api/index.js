const router = require('express').Router()

const userRoutes = require('./usersRoutes')
const reviewRoutes = require('./reviewsRoutes')

router.use('/users', userRoutes)
router.use('/reviews', reviewRoutes)

module.exports = router
