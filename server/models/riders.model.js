const { model, Schema } = require('mongoose')

const ridersSchema = new Schema({
  name: String,
  shops: { type: Array, default: [] },
  total_revenue: { type: Number, default: 0 },
  phone_number: String,
  password: String,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const ridersModel = model('Rider', ridersSchema)

module.exports = ridersModel
