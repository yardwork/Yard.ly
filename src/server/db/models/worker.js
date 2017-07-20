const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkerSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  services: Object,
  area: String,
  firstName: String,
  lastName: String,
  contactInfo: Object,
  equipment: Object,
  availability: Object,
  radius: Number,
  image: String,
  address: Object,
  requests: Array,
})

const Worker = mongoose.model('Worker', WorkerSchema)

module.exports = Worker
