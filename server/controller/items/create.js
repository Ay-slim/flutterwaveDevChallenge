require('dotenv').config({ silent: true })

const itemCreation = require('../../services/items/create')
const { errorResponse, okResponse } = require('../../utils/response.utils')

async function createItem (req, res) {
  itemCreation.create(
    req, (err, response) => {
      if (err) {
        return errorResponse({ statusCode: response.status, data: response, res })
      }
      return okResponse({ statusCode: response.status, data: response, res })
    }
  )
}

module.exports = createItem
