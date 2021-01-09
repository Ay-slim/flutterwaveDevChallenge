const express = require('express')

const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const helmet = require('helmet')
const APIRouter = require('./routes/index.router')
const { apiLimiter } = require('./utils/limiter.utils')

const API_ROUTE = '/api/jumga'

// Allow CORS
app.use(cors())
// send appropriate headers and mask server tech details
app.use(helmet())
// limit api access to 600 requests per 10 minutes
app.use(apiLimiter)
// use morgan to monitor requests
app.use(morgan('dev'))
// allow json body content
app.use(express.json())
// pass all requests to API ROUTE to apiRouter
app.use(API_ROUTE, APIRouter)
// reject invalid requests
app.use('/*', (_, res) =>
  res.status(StatusCodes.NOT_FOUND).send({ message: ReasonPhrases.NOT_FOUND })
)

module.exports = app
