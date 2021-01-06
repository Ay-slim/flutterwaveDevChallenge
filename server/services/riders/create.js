const RiderModel = require('../../models/riders.model')
const bcrypt = require('bcrypt')
const { SALT_ROUNDS, RIDER_DATA_TO_RETURN, INTERNAL_SERVER_ERROR_MESSAGE } = require('../../constants/index.constants')
const { pick } = require('lodash')

async function create (req, callback) {
  const response = {}
  const data = req.body
  try {
    const rider = await RiderModel.findOne().sort({ created_at: -1 }).exec()
    const encryptedPassword = await bcrypt.hash(data.password, SALT_ROUNDS)
    const newRider = {
      name: data.name,
      phone_number: data.phone_number,
      password: encryptedPassword,
      created_at: Date.now(),
      id: rider ? rider.id + 1 : 1
    }
    const riderDoc = new RiderModel(newRider)
    const createdRider = await riderDoc.save()
    response.data = { ...pick(createdRider, RIDER_DATA_TO_RETURN) }
    response.status = 200
    response.message = 'Rider created successfully'
    return callback(null, response)
  } catch (error) {
    response.status = 500
    response.message = INTERNAL_SERVER_ERROR_MESSAGE
    return callback(error, response)
  }
}

module.exports = { create }
