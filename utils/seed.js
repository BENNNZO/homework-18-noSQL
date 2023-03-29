const connection = require('../config/connection')
const { User, Reviews } = require('../models')
const { userData, reviewsData } = require('./data')

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log('connected')
    await Reviews.deleteMany({})
    await Reviews.collection.insertMany(reviewsData)
    await User.deleteMany({})
    await User.collection.insertMany(userData)
    process.exit(0)
});