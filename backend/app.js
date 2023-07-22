const express = require('express');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const reservationRouter = require('./routes/reservation')
const aboutRouter = require('./routes/about');
const errorController = require('./controller/error')
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',authRouter)
app.use('/about',aboutRouter);
app.use('/reservation',reservationRouter)




// error handler
app.use(errorController.get404);

module.exports = app;
