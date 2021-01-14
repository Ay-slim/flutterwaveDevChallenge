const { model, Schema } = require('mongoose')

const shopsSchema = new Schema({
  name: String,
  bank: String,
  account_no: String,
  email: String,
  dispatch_rider_id: Number,
  country: String,
  total_revenue: { type: Number, default: 0 },
  password: String,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const shopsModel = model('Shops', shopsSchema)

module.exports = shopsModel
