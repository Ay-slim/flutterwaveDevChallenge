require('dotenv').config({ silent: true })

const shopCreation = require('../../services/shops/create')

async function createShop (req, res) {
  shopCreation(
    req,
    (err, response) => {
      if (err) {
        return { status: response.status, message: 'There was a problem creating this shop' }
      }
      return response
    }
  )
}

module.exports = createShop
