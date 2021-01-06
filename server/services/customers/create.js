const CustomerModel = require('../../models/customers.model')
const bcrypt = require('bcrypt')
const { SALT_ROUNDS, CUSTOMER_DATA_TO_RETURN } = require('../../constants/index.constants')
const { pick } = require('lodash')

async function create (req, callback) {
  const response = {}
  const data = req.body
  try {
    const customer = await CustomerModel.findOne().sort({ created_at: -1 }).exec()
    const encryptedPassword = await bcrypt.hash(data.password, SALT_ROUNDS)
    const newCustomer = {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      password: encryptedPassword,
      created_at: Date.now(),
      id: customer ? customer.id + 1 : 1
    }
    const customerDoc = new CustomerModel(newCustomer)
    const createdCustomer = await customerDoc.save()
    response.data = { ...pick(createdCustomer, CUSTOMER_DATA_TO_RETURN) }
    response.status = 200
    response.message = 'Customer created successfully'
    return callback(null, response)
  } catch (error) {
    response.status = 500
    response.message = 'Something went wrong please try again'
    return callback(error, response)
  }
}

module.exports = { create }
