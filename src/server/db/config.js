const mongoose = require('mongoose')
// import { MONGO_DEV_URI } from '../../shared/config'

// mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1/yardly_dev')

const db = mongoose.connection


// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('MongoDB connection open')
})


module.exports = db
