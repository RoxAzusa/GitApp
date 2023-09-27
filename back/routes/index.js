var express = require('express');
var router = express.Router();

/* GET all animes */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET aime */
router.get('/:id', function(req, res, next) {
  res.render()
}) 

/* POST anime */
router.post('/add', function(req, res, next) {
  res.render()
}) 

/* PATCH anime */
router.patch('/update/:id', function(req, res, next) {
  res.render()
}) 

/* DELETE anime */
router.delete('/delete/:id', function(req, res, next) {
  res.render()
}) 

module.exports = router;
