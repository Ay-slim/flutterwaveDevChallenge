const ROUTES = {
  CREATE_SHOP: '/shops',
  CREATE_CUSTOMER: '/customers'
}
const SALT_ROUNDS = 10
const SHOP_DATA_TO_RETURN = ['name',
  'bank',
  'account_no',
  'email',
  'dispatch_rider',
  'country']
const CUSTOMER_DATA_TO_RETURN = ['name',
  'email',
  'phone_number'
]

module.exports = {
  ROUTES,
  SALT_ROUNDS,
  SHOP_DATA_TO_RETURN,
  CUSTOMER_DATA_TO_RETURN
}
