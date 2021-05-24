const fetch = require('node-fetch');
const config = require('../../api-key.json');

const movieController = {};

movieController.getPopularMovies = (req, res, next) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=${req.query.page}`;
  fetch(url)
    .then((data) => data.json())
    .then((updatedData) => {
      res.locals.movieResults = updatedData.results;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = movieController;
