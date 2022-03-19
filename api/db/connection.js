const mongoose = require('mongoose')

// Create the connection
!process.env.NODE_ENV ? require('dotenv').config() : console.log('DEV:PROD')
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.nr8aa.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true
})
.catch((err) => {
	console.log(err)
})

// Store the connection
const db = mongoose.connection

module.exports = db