const invalidRoutesRouter = require('./invalid.router')
const testRouter = require('./test.router')
const shopRouter = require('./shop.router')
const customerRouter = require('./customer.router')

const APIRouter = [testRouter, shopRouter, customerRouter, invalidRoutesRouter]
module.exports = APIRouter
