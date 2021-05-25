// Started a drink router but didn't end up using it

const path = require('path');
const express = require('express');

const cocktailController = require('../controllers/cocktailController.js');
const router = express.Router();

router.get('/', cocktailController.getRandomDrink, (req, res) => {
  res.status(200).send(res.locals.drinkResult);
});

module.exports = router;
