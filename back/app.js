var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
  origin: (origin, callback) => {
      callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: [
      "Access-Control-Allow-Origin",
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
  ],
  credentials: true,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

const mongoose = require("mongoose");
const mongodbUri = process.env.DB;

mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Success connection !");
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB : ", err);
  });

app.use('/animes', indexRouter);

module.exports = app;
