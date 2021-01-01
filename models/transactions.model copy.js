const { model, Schema } = require('mongoose');

const transactionSchema = new Schema({
  merchant_value: Number,
  jumga_comission: Number,
  jumga_delivery_comission: Number,
  confirmation_token: Boolean,
  created_at: { type: Date, default: Date.now() },
  transaction_id: { type: Number, required: true, unique: true }
});

const transactionModel = model('Transaction', transactionSchema);

module.exports = transactionModel;
