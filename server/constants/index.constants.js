const ROUTES = {
  CREATE_SHOP: '/shops',
  CREATE_CUSTOMER: '/customers',
  CREATE_TRANSACTION: '/transactions',
  CREATE_ITEM: '/items',
  CREATE_RIDER: '/riders',
  CREATE_INITIAL_PAYMENT: '/initial-payment',
  MAKE_CARD_PAYMENT: '/card-payment',
  MAKE_ACCOUNT_PAYMENT: '/account-payment'
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
const ITEM_DATA_TO_RETURN = ['name',
  'merchant_id',
  'image',
  'price',
  'created_at'
]
const RIDER_DATA_TO_RETURN = ['name',
  'shops',
  'total_revenue',
  'created_at']
const CARD_PAYMENT_DETAILS = ['card_number',
  'cvv',
  'expiry_month',
  'expiry_year',
  'currency',
  'amount',
  'fullname',
  'email',
  'tx_ref',
  'redirect_url',
  'authorization']
const ACCOUNT_PAYMENT_DETAILS = ['card_number',
  'tx_ref',
  'amount',
  'account_bank',
  'account_number',
  'currency',
  'email',
  'phone_number',
  'fullname']
const SALES_COMMISSION = 0.025
const DELIVERY_COMMISSION = 0.2

module.exports = {
  ROUTES,
  INTERNAL_SERVER_ERROR_MESSAGE,
  SALT_ROUNDS,
  SHOP_DATA_TO_RETURN,
  CUSTOMER_DATA_TO_RETURN,
  TRANSACTION_DATA_TO_RETURN,
  ITEM_DATA_TO_RETURN,
  RIDER_DATA_TO_RETURN,
  SALES_COMMISSION,
  DELIVERY_COMMISSION,
  CARD_PAYMENT_DETAILS,
  ACCOUNT_PAYMENT_DETAILS
}
