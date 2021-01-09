const mongoose = require('mongoose')
const { config } = require('dotenv')

config()
const { MONGO_CONNECTION_STRING } = process.env

/**
 * Connects us to mongodb
 */
async function connectToDB () {
  try {
    // connect to db
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    // force document updates to return the updated documents
    mongoose.set('returnOriginal', false)
    console.log('Successfully connected to database')
  } catch (err) {
    console.log(err)
  }
}

module.exports = { connectToDB }
