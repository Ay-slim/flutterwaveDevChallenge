require('dotenv').config({ silent: true })

const customerCreation = require('../../services/customers/create')
const { errorResponse, okResponse } = require('../../utils/response.utils')

async function createCustomer (req, res) {
  customerCreation.create(
    req, (err, response) => {
      if (err) {
        return errorResponse({ statusCode: response.status, data: response, res })
      }
      return okResponse({ statusCode: response.status, data: response, res })
    }
  )
}

module.exports = createCustomer
