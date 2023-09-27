const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    anime: {
        type: mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String,
    },
    years: {
        type: String,
    },
    nbEpisodes: {
        type: String,
    },
    description: {
        type: String,
    },
    gender: {
        type: String,
    },
    image: {
        type: String,
    },
  })

const Anime = mongoose.model('Anime', DataSchema);
module.exports = Anime;