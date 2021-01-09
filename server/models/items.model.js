const { model, Schema } = require('mongoose')

const shopsSchema = new Schema({
  name: String,
  merchant_id: String,
  image: String,
  price: String,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const itemsModel = model('Items', shopsSchema)

module.exports = itemsModel
