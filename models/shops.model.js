const { model, Schema } = require('mongoose')

const shopsSchema = new Schema({
  merchant_name: String,
  merchant_bank: String,
  merchant_account_no: String,
  merchant_email: String,
  dispatch_rider: String,
  country: String,
  shop_approval: { type: Boolean, default: false },
  total_revenue: Number,
  created_at: { type: Date, default: Date.now() },
  merchant_id: { type: Number, required: true, unique: true }
})

const shopsModel = model('Shops', shopsSchema)

module.exports = shopsModel
