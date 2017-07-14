import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  addresses: Array,
  contactInfo: Object,
})

const User = mongoose.model('User', UserSchema)

export default User
