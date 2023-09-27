const express = require('express');
const path = require('path');

const mongoose = require('mongoose'); // Base de données Moongose
const dotenv = require('dotenv'); // Ajout des éléments sécurisés dans un fichier .env
dotenv.config('../.env');
console.log(dotenv);

const routes = require('./routes/anime');

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(
        process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });

app.use(express.json());

// Permet d'accéder deux serveurs et d'envoyées des requêtes sans être bloqué
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/', routes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;

