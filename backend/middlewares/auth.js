const jwt = require('jsonwebtoken');

const { JWT_SECRET = 'pkuvqwongbqpoiqoufnvsvybqp' } = process.env;
const NotValidError = require('../errors/NotValidError');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new NotValidError('Требуется авторизация'); // 401
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new NotValidError('token is not valid')); // 401
  }

  req.user = payload; // записываем пейлоуд в объект запроса
  return next();
};

module.exports = auth;
