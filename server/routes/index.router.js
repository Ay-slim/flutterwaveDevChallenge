const invalidRoutesRouter = require('./invalid.router')
const testRouter = require('./test.router')
const shopRouter = require('./shop.router')
const customerRouter = require('./customer.router')
const transactionRouter = require('./transaction.router')
const itemRouter = require('./item.router')

const APIRouter = [testRouter, shopRouter, customerRouter, transactionRouter, itemRouter, invalidRoutesRouter]
module.exports = APIRouter
