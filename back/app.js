var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var animesRouter = require('./routes/animes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection via mongoose
const mongoose = require("mongoose");

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(process.env.DB)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

module.exports = new Database();

app.use('/', indexRouter);
app.use('/animes', animesRouter);

module.exports = app;
