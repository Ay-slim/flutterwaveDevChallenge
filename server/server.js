const app = require('./app')
const { connectToDB } = require('./utils/helpers.utils')
const port = process.env.PORT || 3000

require('dotenv').config({
  silent: true
})

connectToDB()

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})
