const ShopModel = require('../../models/shops.model')
const bcrypt = require('bcrypt')
const { SALT_ROUNDS, SHOP_DATA_TO_RETURN, INTERNAL_SERVER_ERROR_MESSAGE } = require('../../constants/index.constants')
const { pick } = require('lodash')

async function create (req, callback) {
  const response = {}
  const data = req.body
  try {
    const shop = await ShopModel.findOne().sort({ created_at: -1 }).exec()
    const encryptedPassword = await bcrypt.hash(data.password, SALT_ROUNDS)
    const newShop = {
      name: data.name,
      bank: data.bank,
      account_no: data.account_no,
      dispatch_rider_id: data.dispatch_rider_id,
      email: data.email,
      country: data.country,
      password: encryptedPassword,
      created_at: Date.now(),
      id: shop ? shop.id + 1 : 1
    }
    const shopDoc = new ShopModel(newShop)
    const createdShop = await shopDoc.save()
    response.data = { ...pick(createdShop, SHOP_DATA_TO_RETURN) }
    response.status = 200
    response.message = 'Shop created successfully'
    return callback(null, response)
  } catch (error) {
    response.status = 500
    response.message = INTERNAL_SERVER_ERROR_MESSAGE
    return callback(error, response)
  }
}

module.exports = { create }
