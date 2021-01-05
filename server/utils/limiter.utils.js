const RateLimiter = require('express-rate-limit')

/**
 * Limit IP addresses attempting to use API to one request per second
 */
const apiLimiter = RateLimiter({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 600 // limit each IP to 600 requests per windowMs
})

/**
 * Limit IP addresses attempting to login to one request per second
 */
const loginLimiter = RateLimiter({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5 // limit each IP to 600 requests per windowMs
})

module.exports = { apiLimiter, loginLimiter }
