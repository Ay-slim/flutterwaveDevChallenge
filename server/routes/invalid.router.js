const { Router } = require('express')

const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const inValidRoutesRouter = Router()

inValidRoutesRouter.all('/*', (_, res) =>
  res.status(StatusCodes.NOT_FOUND).send({ message: ReasonPhrases.NOT_FOUND })
)

module.exports = inValidRoutesRouter
