const { Router } = require('express')
const transactionRouter = Router()
const { ROUTES } = require('../constants/index.constants')
const { CREATE_TRANSACTION } = ROUTES
const createTransaction = require('../controller/transactions/create')

//  Create Transaction

transactionRouter.post(CREATE_TRANSACTION, createTransaction)

module.exports = transactionRouter
