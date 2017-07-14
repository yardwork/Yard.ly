import mongoose from 'mongoose'

const Schema = mongoose.Schema

const WorkerSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  services: { type: Object, required: true },
  area: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contactInfo: Object,
  equipment: Object,
  availability: Object,
  radius: Number,
  image: String,
  address: String,
  requests: Array,
})

const Worker = mongoose.model('Worker', WorkerSchema)

export default Worker
