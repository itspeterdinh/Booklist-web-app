/* eslint-disable radix */
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// eslint-disable-next-line no-unused-vars
const session = require('express-session');
const globalErrorHandler = require('./controllers/errorController');
const itemRouter = require('./routes/itemRoutes');
const userRouter = require('./routes/userRoutes');
const cartRouter = require('./routes/cartRoutes');
const AppError = require('./utils/appError');

const app = express();
app.enable('trust proxy');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// app.get('', function(req, res, next) {
//   res.locals.cart = req.session.cart;
//   next();
// });
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'anyrandomstring',
    cookie: {
      httpOnly: true,
      maxAge: parseInt(process.env.SESSION_MAX_AGE)
    }
  })
);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //console.log(req.cookies);
  next();
});

app.use('/api/v1/items', itemRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/cart', cartRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
