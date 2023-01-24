const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10000,
  message: 'С данного IP превышено количество запросов',
});

module.exports = limiter;
