const fetch = require('node-fetch');

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


module.exports = cocktailController;