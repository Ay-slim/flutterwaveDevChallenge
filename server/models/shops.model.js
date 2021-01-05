const { model, Schema } = require('mongoose')

const shopsSchema = new Schema({
  name: String,
  bank: String,
  account_no: String,
  email: String,
  dispatch_rider: String,
  country: String,
  total_revenue: Number,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const shopsModel = model('Shops', shopsSchema)

module.exports = shopsModel
