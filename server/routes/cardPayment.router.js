const { Router } = require('express')
const cardPaymentRouter = Router()
const { ROUTES } = require('../constants/index.constants')
const { MAKE_CARD_PAYMENT } = ROUTES
const cardPayment = require('../controller/cardPayments/create')

//  Make initial payment

cardPaymentRouter.post(MAKE_CARD_PAYMENT, cardPayment)

module.exports = cardPaymentRouter
