require('dotenv').config({ silent: true })
const { FLUTTERWAVE_SECRET_KEY } = process.env
const request = require('request')
const { errorResponse, okResponse } = require('../../utils/response.utils')
async function makeInitialPayment (req, res) {
  const paymentData = req.body
  const options = {
    method: 'POST',
    body: paymentData,
    json: true,
    url: FLUTTERWAVE_SECRET_KEY,
    headers: {
      Authorization: 'Bearer FLWSECK_TEST-c72f5a11ed2c0498303a712a6e445e29-X'
    }
  }
  function callback (error, response, body) {
    if (!error && response.statusCode === 200) {
      return okResponse({ statusCode: response.statusCode, data: response.body, res })
    }
    return errorResponse({ statusCode: response.statusCode, data: response.body, res })
  }
  request(options, callback)
}

module.exports = makeInitialPayment
