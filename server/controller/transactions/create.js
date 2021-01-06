require('dotenv').config({ silent: true })

const transactionCreation = require('../../services/transactions/create')
const { errorResponse, okResponse } = require('../../utils/response.utils')

async function createTransaction (req, res) {
  transactionCreation.create(
    req, (err, response) => {
      if (err) {
        return errorResponse({ statusCode: response.status, data: response, res })
      }
      return okResponse({ statusCode: response.status, data: response, res })
    }
  )
}

module.exports = createTransaction
