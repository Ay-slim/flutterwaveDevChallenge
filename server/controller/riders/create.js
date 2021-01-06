require('dotenv').config({ silent: true })

const riderCreation = require('../../services/riders/create')
const { errorResponse, okResponse } = require('../../utils/response.utils')

async function createRider (req, res) {
  riderCreation.create(
    req, (err, response) => {
      if (err) {
        return errorResponse({ statusCode: response.status, data: response, res })
      }
      return okResponse({ statusCode: response.status, data: response, res })
    }
  )
}

module.exports = createRider
