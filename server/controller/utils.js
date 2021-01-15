const TransModel = require('../models/transactions.model')
const RiderModel = require('../models/riders.model')
const ShopModel = require('../models/shops.model')
const { TRANSACTION_DATA_TO_RETURN, SALES_COMMISSION, DELIVERY_COMMISSION } = require('../constants/index.constants')
const { pick } = require('lodash')

async function sendTransactionToDB (data) {
  const response = {}
  try {
    const transaction = await TransModel.findOne().sort({ created_at: -1 }).exec()
    const itemValue = data.delivery_value ? data.total_value - data.delivery_value : data.total_value
    const newTransaction = {
      total_value: data.total_value,
      item_value: itemValue,
      merchant_id: data.merchant_id,
      merchant_value: itemValue * (1 - SALES_COMMISSION),
      delivery_value: data.delivery_value ? data.delivery_value : 0,
      comission: data.total_value * SALES_COMMISSION,
      delivery_comission: data.delivery_value ? data.delivery_value * DELIVERY_COMMISSION : 0,
      item_id: data.item_id,
      transaction_status: data.transaction_status,
      transaction_type: data.transaction_type,
      created_at: Date.now(),
      id: transaction ? transaction.id + 1 : 1
    }
    const transactionDoc = new TransModel(newTransaction)
    const createdTransaction = await transactionDoc.save()
    response.data = { ...pick(createdTransaction, TRANSACTION_DATA_TO_RETURN) }
    response.status = 200
    response.message = 'Transaction created successfully'
    const riderRevenue = data.delivery_value ? data.delivery_value * (1 - DELIVERY_COMMISSION) : 0
    if (riderRevenue !== 0 && data.transaction_status === 'successful') {
      const [shopDetails] = await ShopModel.find({ id: data.merchant_id }).exec()
      const riderId = shopDetails.dispatch_rider_id
      await ShopModel.updateOne({ id: data.merchant_id }, { $inc: { total_revenue: newTransaction.merchant_value } })
      await RiderModel.updateOne({ id: riderId }, { $inc: { total_revenue: riderRevenue } })
      return 'done'
    }
    return 'done'
  } catch (error) {
    return 'error'
  }
}

// This is the encryption function that encrypts your payload by passing the stringified format and your encryption Key.

function encrypt (key, text) {
  var forge = require('node-forge')
  var cipher = forge.cipher.createCipher(
    '3DES-ECB',
    forge.util.createBuffer(key)
  )
  cipher.start({ iv: '' })
  cipher.update(forge.util.createBuffer(text, 'utf-8'))
  cipher.finish()
  var encrypted = cipher.output
  return forge.util.encode64(encrypted.getBytes())
}

module.exports = { sendTransactionToDB, encrypt }
