const path = require('path');
const express = require('express');

const movieController = require('../controllers/movieController.js'); // TODO double check this
const cocktailController = require('../controllers/cocktailController.js');
const router = express.Router();

// // A body parser is needed for req.query in the getSpecificDrink
// // To install: npm install body-parser
// const bodyParser = require('body-parser');

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get('/', movieController.getPopularMovies, (req, res) => {
  // changed this
  res.status(200).send(res.locals.movieResults);
});

router.get('/drink', cocktailController.getRandomDrink, (req, res) => {
  res.status(200).send(res.locals.drinkResults);
});

router.get(
  '/specificDrink',
  cocktailController.getSpecificDrink,
  (req, res) => {
    res.status(200).send(res.locals.drinkResults);
  }
);

module.exports = router;
