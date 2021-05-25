const path = require('path');
const express = require('express');

const movieController = require('../controllers/movieController.js');

const cocktailController = require('../controllers/cocktailController.js');
const router = express.Router();

// // A body parser is needed for req.query in the getSpecificDrink
// // To install: npm install body-parser
// const bodyParser = require('body-parser');

// Route client request to movieController
router.get('/', movieController.getPopularMovies, (req, res) => {
  // changed this
  res.status(200).send(res.locals.movieResults);
});
// Receive client request for drink
router.get('/drink', cocktailController.getRandomDrink, (req, res) => {
  // Store drink results in res.locals
  res.status(200).send(res.locals.drinkResults);
});

//Receive cleint request for specific drink
router.get(
  '/specificDrink',
  cocktailController.getSpecificDrink,
  (req, res) => {
    res.status(200).send(res.locals.drinkResults);
  }
);

module.exports = router;
