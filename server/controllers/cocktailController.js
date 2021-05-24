const fetch = require('node-fetch');

const genreDrinks = require('../data/genreDrinks.json');
const cocktailController = {};

cocktailController.getRandomDrink = (req, res, next) => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  fetch(url)
    .then((data) => data.json())
    .then((updatedData) => {
      res.locals.drinkResults = updatedData.drinks;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

cocktailController.getSpecificDrink = (req, res, next) => {
  // Double check req.query here: http://expressjs.com/en/api.html
  // We also have to pay attention to the body parser

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
    genreDrinks[req.query.genre]
  }`; // The request should look something like this: localhost:3000/api/specificDrink?genre=number
  //   console.log('supposed to be correct drink' + genreDrinks[req.query.genre]);
  fetch(url)
    .then((data) => data.json())
    .then((updatedData) => {
      res.locals.drinkResults = updatedData.drinks[0];
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = cocktailController;
