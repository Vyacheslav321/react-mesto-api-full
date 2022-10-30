const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
const NotValidError = require('../errors/NotValidError');

const auth = (req, res, next) => {
  const { authorize } = req.headers;

  if (!authorize || !authorize.startsWith('Bearer ')) {
    throw new NotValidError('Требуется авторизация'); // 401
  }

  const token = authorize.replace('jwt', '');

  let playload;

  try {
    playload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'pkuvqwongbqpoiqoufnvsvybqp',
    );
  } catch (err) {
    return next(new NotValidError('token is not valid')); // 401
  }

  req.user = playload;
  return next();
};

module.exports = auth;
