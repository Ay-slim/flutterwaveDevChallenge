const { model, Schema } = require('mongoose');

const merchantSchema = new Schema({
  merchant_name: String,
  dispatch_rider: String,
  country: String,
  confirmation_token: Boolean,
  created_at: { type: Date, default: Date.now() },
  merchant_id: { type: Number, required: true, unique: true }
});

const merchantModel = model('Merchant', merchantSchema);

module.exports = merchantModel;
