const { model, Schema } = require('mongoose')

const shopsSchema = new Schema({
  name: String,
  shop_id: String,
  image: String,
  price: String,
  created_at: { type: Date, default: Date.now() },
  id: { type: Number, required: true, unique: true }
})

const shopsModel = model('Shops', shopsSchema)

module.exports = shopsModel
