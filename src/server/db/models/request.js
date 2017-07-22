const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RequestSchema = new Schema({
  jobname: { type: String, required: true },
  userId: { type: String, required: true },
  workerId: { type: String, required: true },
  workerFirst: String,
  userFirst: String,
  accepted: { type: Boolean, required: true },
  services: { type: Object, required: false },
  equipment: { type: Object, required: false },
  address: { type: Object, required: false },
  time: { type: String, required: false },
  date: { type: String, required: false },
  image: String,
  hours: Number,
  rate: Number,
})

const Request = mongoose.model('Request', RequestSchema)

module.exports = Request
