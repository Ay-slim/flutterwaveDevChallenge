const { Router } = require('express')
const customerRouter = Router()
const { ROUTES } = require('../constants/index.constants')
const { CREATE_CUSTOMER } = ROUTES
const createCustomer = require('../controller/customers/create')

//  Create customer

customerRouter.post(CREATE_CUSTOMER, createCustomer)

module.exports = customerRouter
