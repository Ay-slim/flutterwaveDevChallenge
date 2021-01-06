const { model, Schema } = require('mongoose')

const transactionSchema = new Schema({
  total_transaction_value: Number,
  merchant_id: String,
  merchant_value: Number,
  delivery_value: { type: Number, default: 0 },
  comission: Number,
  delivery_comission: Number,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const transactionModel = model('Transaction', transactionSchema)

module.exports = transactionModel
