require('dotenv').config({ silent: true })
const { FLUTTERWAVE_SECRET_KEY } = process.env
const request = require('request')
const { pick } = require('lodash')
const { errorResponse, okResponse } = require('../../utils/response.utils')
const { sendTransactionToDB } = require('../utils')
const { CARD_PAYMENT_DETAILS } = require('../../constants/index.constants')
async function makeCardPayment (req, res) {
  const dataFromReq = req.body
  const paymentData = { ...pick(dataFromReq, CARD_PAYMENT_DETAILS) }
  const options = {
    method: 'POST',
    body: paymentData,
    json: true,
    url: 'https://api.flutterwave.com/v3/charges?type=card',
    headers: {
      Authorization: FLUTTERWAVE_SECRET_KEY
    }
  }
  const transactionData = {
    total_value: dataFromReq.amount,
    merchant_id: dataFromReq.merchant_id,
    item_id: dataFromReq.item_id,
    transaction_status: null,
    delivery_value: dataFromReq.delivery_value ? dataFromReq.delivery_value : 0
  }
  async function callback (error, response, body) {
    if (!error && response.statusCode === 200) {
      transactionData.transaction_status = 'successful'
      await sendTransactionToDB(transactionData)
      return okResponse({ statusCode: response.statusCode, data: response.body, res })
    }
    transactionData.transaction_status = 'failed'
    console.log(transactionData)
    console.log(error)
    const DBResponse = await sendTransactionToDB(transactionData)
    console.log('response: ', DBResponse)
    return errorResponse({ statusCode: response.statusCode, data: response.body, res })
  }
  request(options, callback)
}

module.exports = makeCardPayment
