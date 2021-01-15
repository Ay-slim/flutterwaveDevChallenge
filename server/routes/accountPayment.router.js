const { Router } = require('express')
const accountPaymentRouter = Router()
const { ROUTES } = require('../constants/index.constants')
const { MAKE_ACCOUNT_PAYMENT } = ROUTES
const accountPayment = require('../controller/accountDebitPayments/create')

//  Make account payment

accountPaymentRouter.post(MAKE_ACCOUNT_PAYMENT, accountPayment)

module.exports = accountPaymentRouter
