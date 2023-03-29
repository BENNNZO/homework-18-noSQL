const { mongoose, connect, connection } = require('mongoose');
mongoose.set('strictQuery', true);

const connectionString =
	process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nosqldb';

connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

module.exports = connection;
