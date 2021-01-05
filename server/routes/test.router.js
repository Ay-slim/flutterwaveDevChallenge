const { Router } = require('express')

const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const testRouter = Router()

testRouter.all('', (req, res) =>
  res
    .status(StatusCodes.OK)
    .send({ message: ReasonPhrases.OK })
)

module.exports = testRouter
