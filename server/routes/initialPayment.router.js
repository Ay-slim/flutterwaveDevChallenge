const { Router } = require('express')
const initialPaymentRouter = Router()
const { ROUTES } = require('../constants/index.constants')
const { CREATE_INITIAL_PAYMENT } = ROUTES
const initialPayment = require('../controller/confirmationPayment/create')

//  Make initial payment

initialPaymentRouter.post(CREATE_INITIAL_PAYMENT, initialPayment)

module.exports = initialPaymentRouter
