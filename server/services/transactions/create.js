const TransModel = require('../../models/transactions.model')
const RiderModel = require('../../models/riders.model')
const ShopModel = require('../../models/shops.model')
const { TRANSACTION_DATA_TO_RETURN, SALES_COMMISSION, DELIVERY_COMMISSION, INTERNAL_SERVER_ERROR_MESSAGE } = require('../../constants/index.constants')
const { pick } = require('lodash')

async function create (req, callback) {
  const response = {}
  const data = req.body
  try {
    const transaction = await TransModel.findOne().sort({ created_at: -1 }).exec()
    const newTransaction = {
      total_transaction_value: data.total_transaction_value,
      merchant_id: data.merchant_id,
      merchant_value: data.total_transaction_value * (1 - SALES_COMMISSION),
      delivery_value: data.delivery_value ? data.delivery_value : 0,
      comission: data.total_transaction_value * SALES_COMMISSION,
      delivery_comission: data.delivery_value ? data.delivery_value * DELIVERY_COMMISSION : 0,
      created_at: Date.now(),
      id: transaction ? transaction.id + 1 : 1
    }
    const transactionDoc = new TransModel(newTransaction)
    const createdTransaction = await transactionDoc.save()
    response.data = { ...pick(createdTransaction, TRANSACTION_DATA_TO_RETURN) }
    response.status = 200
    response.message = 'Transaction created successfully'
    const riderRevenue = data.delivery_value ? data.delivery_value * (1 - DELIVERY_COMMISSION) : 0
    if (riderRevenue) {
      const [shopDetails] = await ShopModel.find({ id: data.merchant_id }).exec()
      const riderName = shopDetails.dispatch_rider
      await RiderModel.updateOne({ name: riderName }, { $inc: { total_revenue: riderRevenue } })
      return callback(null, response)
    }
    return callback(null, response)
  } catch (error) {
    response.status = 500
    response.message = INTERNAL_SERVER_ERROR_MESSAGE
    return callback(error, response)
  }
}

module.exports = { create }
