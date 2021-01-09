const ItemsModel = require('../../models/items.model')
const { ITEM_DATA_TO_RETURN, INTERNAL_SERVER_ERROR_MESSAGE } = require('../../constants/index.constants')
const { pick } = require('lodash')

async function create (req, callback) {
  const response = {}
  const data = req.body
  try {
    const item = await ItemsModel.findOne().sort({ created_at: -1 }).exec()
    const newItem = {
      name: data.name,
      merchant_id: data.merchant_id,
      image: data.image,
      price: data.price,
      created_at: Date.now(),
      id: item ? item.id + 1 : 1
    }
    const itemDoc = ItemsModel(newItem)
    const createdItem = await itemDoc.save()
    response.data = { ...pick(createdItem, ITEM_DATA_TO_RETURN) }
    response.status = 200
    response.message = 'Item created successfully'
    return callback(null, response)
  } catch (error) {
    response.status = 500
    response.message = INTERNAL_SERVER_ERROR_MESSAGE
    return callback(error, response)
  }
}

module.exports = { create }
