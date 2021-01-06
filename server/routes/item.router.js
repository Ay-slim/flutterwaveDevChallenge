const { Router } = require('express')
const itemRouter = Router()
const { ROUTES } = require('../constants/index.constants')
const { CREATE_ITEM } = ROUTES
const createItem = require('../controller/items/create')

//  Create Item

itemRouter.post(CREATE_ITEM, createItem)

module.exports = itemRouter
