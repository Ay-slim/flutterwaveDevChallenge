const { model, Schema } = require('mongoose')

const ridersSchema = new Schema({
  name: String,
  shops: Array,
  total_revenue: Number,
  password: String,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const ridersModel = model('Transaction', ridersSchema)

module.exports = ridersModel
