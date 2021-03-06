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
      created_at: Date.now(),
      id: transaction ? transaction.id + 1 : 1
    }
    console.log(newTransaction)
    const transactionDoc = new TransModel(newTransaction)
    console.log('tD: ', transactionDoc)
    const createdTransaction = await transactionDoc.save()
    console.log('cT: ', createdTransaction)
    response.data = { ...pick(createdTransaction, TRANSACTION_DATA_TO_RETURN) }
    response.status = 200
    response.message = 'Transaction created successfully'
    const riderRevenue = data.delivery_value ? data.delivery_value * (1 - DELIVERY_COMMISSION) : 0
    console.log(riderRevenue)
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
