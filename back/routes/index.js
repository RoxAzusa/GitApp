var express = require('express');
var router = express.Router();
const Anime = require("../Models/Anime");

/* GET all animes */
router.get('/', (req, res, next) => {
  Anime.find()
    .then(newSauces => 
      res.status(200).json(newSauces))
    .catch(error => 
      res.status(400).json({ error }));
});

/* GET anime */
router.get('/:id', (req, res, next) => {
  Anime.findOne({ _id: req.params.id })
    .then(anime => res.status(200).json(anime))
    .catch(error => res.status(404).json({ error }));
});

/* POST anime */
router.post('/add', function(req, res, next) {
    delete req.body._id;
    const anime = new Anime({
      ...req.body
    });
    anime.save()
      .then(() => res.status(201).json(anime))
      .catch(error => res.status(400).json({ error }));
}) 

/* PATCH anime */
router.patch('/update/:id', (req, res, next) => {
  Anime.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json(req.body))
    .catch(error => res.status(400).json({ error }));
    console.log(req.body)
});

/* DELETE anime */
router.delete('/update/:id', (req, res, next) => {
  Anime.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Success delete !'}))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;
