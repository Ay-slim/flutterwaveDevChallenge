const { model, Schema } = require('mongoose')

const ridersSchema = new Schema({
  rider_name: String,
  shops: Array,
  total_revenue: Number,
  created_at: { type: Date, default: Date.now() },
  transaction_id: { type: Number, required: true, unique: true }
})

const ridersModel = model('Transaction', ridersSchema)

module.exports = ridersModel
