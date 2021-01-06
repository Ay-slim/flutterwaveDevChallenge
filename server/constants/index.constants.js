const ROUTES = {
  CREATE_SHOP: '/shops',
  CREATE_CUSTOMER: '/customers',
  CREATE_TRANSACTION: '/transactions'
}
const INTERNAL_SERVER_ERROR_MESSAGE = 'Something went wrong, please try again'
const SALT_ROUNDS = 10
const SHOP_DATA_TO_RETURN = ['name',
  'bank',
  'account_no',
  'email',
  'dispatch_rider',
  'country',
  'created_at']
const CUSTOMER_DATA_TO_RETURN = ['name',
  'email',
  'phone_number',
  'created_at'
]
const TRANSACTION_DATA_TO_RETURN = ['name',
  'total_transaction_value',
  'merchant_id',
  'merchant_value',
  'delivery_value',
  'jumga_comission',
  'jumga_delivery_comission',
  'created_at'
]
const SALES_COMMISSION = 0.025
const DELIVERY_COMMISSION = 0.2

module.exports = {
  ROUTES,
  INTERNAL_SERVER_ERROR_MESSAGE,
  SALT_ROUNDS,
  SHOP_DATA_TO_RETURN,
  CUSTOMER_DATA_TO_RETURN,
  TRANSACTION_DATA_TO_RETURN,
  SALES_COMMISSION,
  DELIVERY_COMMISSION
}
