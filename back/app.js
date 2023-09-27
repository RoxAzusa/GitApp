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

const mongodbUri = process.env.DB;

mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB : ", err);
  });

app.use('/', indexRouter);
app.use('/animes', animesRouter);

module.exports = app;
