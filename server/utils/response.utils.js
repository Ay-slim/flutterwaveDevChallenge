const { StatusCodes } = require('http-status-codes')
const { INTERNAL_SERVER_ERROR, OK } = StatusCodes

function errorResponse ({ statusCode = INTERNAL_SERVER_ERROR, res, data = {} }) {
  return res.status(statusCode).send({ ...data })
}

function okResponse ({ statusCode = OK, res, data = {} }) {
  return res.status(statusCode).send({ ...data })
}

module.exports = { errorResponse, okResponse }
