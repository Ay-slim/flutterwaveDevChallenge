const invalidRoutesRouter = require('./invalid.router')
const testRouter = require('./test.router')
const shopRouter = require('./shop.router')

const APIRouter = [testRouter, shopRouter, invalidRoutesRouter]
module.exports = APIRouter
