require('dotenv').config({ silent: true })

const shopCreation = require('../../services/shops/create')
const { errorResponse, okResponse } = require('../../utils/response.utils')

async function createShop (req, res) {
  shopCreation.create(
    req, (err, response) => {
      if (err) {
        return errorResponse({ statusCode: response.status, data: response, res })
      }
      return okResponse({ statusCode: response.status, data: response, res })
    }
  )
}

module.exports = createShop
