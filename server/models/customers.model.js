const { model, Schema } = require('mongoose')

const customerSchema = new Schema({
  name: String,
  email: String,
  phone_number: String,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const customerModel = model('Customer', customerSchema)

module.exports = customerModel
