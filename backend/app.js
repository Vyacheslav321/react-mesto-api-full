require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const router = require('./routes');
const errorsHandler = require('./middlewares/errorrsHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3001 } = process.env;

const app = express();

const options = {
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://mesto.gorochnyi.nomoredomains.icu',
    'https://mesto.gorochnyi.nomoredomains.icu',
  ],
  allowedHeaders: ['authorization ', 'Content-Type', 'origin'],
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  credentials: true,
};

app.use(cors(options));

app.use(helmet());
app.disable('x-powered-by');

app.use(cookieParser());// Парсер кук как мидлвэр
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', { useNewUrlParser: true }); // подключение сервера mongo

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(router); // Логика маршрутизации

app.use(errorLogger);

app.use(errors()); // обработчик ошибок celebrate
app.use(errorsHandler);// централизованный обработчик ошибок

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
