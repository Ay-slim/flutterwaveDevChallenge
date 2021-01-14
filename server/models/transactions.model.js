const { model, Schema } = require('mongoose')

const transactionSchema = new Schema({
  total_value: Number,
  item_value: Number,
  merchant_id: Number,
  merchant_value: Number,
  delivery_value: Number,
  comission: Number,
  delivery_comission: Number,
  item_id: Number,
  transaction_status: String,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const transactionModel = model('Transaction', transactionSchema)

module.exports = transactionModel
