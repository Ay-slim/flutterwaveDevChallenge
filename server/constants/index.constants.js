const ROUTES = { CREATE_SHOP: '/shops' }
const SALT_ROUNDS = 10
const SHOP_DATA_TO_RETURN = ['name',
  'bank',
  'account_no',
  'email',
  'dispatch_rider',
  'country']

module.exports = { ROUTES, SALT_ROUNDS, SHOP_DATA_TO_RETURN }
