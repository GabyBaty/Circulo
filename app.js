var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news')
var usersRouter = require('./routes/users');
var filialesRouter = require('./routes/filiales');
var bienestarRouter = require('./routes/bienestar');
var reservaRouter= require('./routes/reserva');
var tourRouter= require('./routes/tour');
var farmaciaRouter=require('./routes/farmacia');
var delegadoRouter=require('./routes/delegado');
var evacuationRouter=require('./routes/evacuation');
var contactoRouter=require('./routes/contacto');
var detailRouter=require('./routes/detail');
var tramiteRouter=require('./routes/tramite');
var  cors = require('cors');
 

var app = express();

// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/filial',filialesRouter);
app.use('/wellness',bienestarRouter);
app.use('/reservas',reservaRouter);
app.use('/tour', tourRouter);
app.use('/farmacias',farmaciaRouter);
app.use('/delegados',delegadoRouter);
app.use('/evacuacion',evacuationRouter);
app.use('/contactos',contactoRouter);
app.use('/detailnews',detailRouter);
app.use('/tramites',tramiteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
