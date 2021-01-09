const { Router } = require('express')
const riderRouter = Router()
const { ROUTES } = require('../constants/index.constants')
const { CREATE_RIDER } = ROUTES
const createRider = require('../controller/riders/create')

//  Create Rider

riderRouter.post(CREATE_RIDER, createRider)

module.exports = riderRouter
