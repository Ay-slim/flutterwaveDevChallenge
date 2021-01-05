const { Router } = require('express')
const shopRouter = Router()
const { ROUTES } = require('../constants/index.constants')
const { CREATE_SHOP } = ROUTES
const createShop = require('../controller/shops/create')

//  Create shop

shopRouter.post(CREATE_SHOP, createShop)

module.exports = shopRouter
