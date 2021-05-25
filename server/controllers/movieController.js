const fetch = require('node-fetch');
const config = require('../../api-key.json');

const movieController = {};

// movieControler fetchs request to external API to get movie data
movieController.getPopularMovies = (req, res, next) => {
  // Declare a URL variable to store the external API url using the API Key provided by the API website
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=${req.query.page}`;

  // Fetch request to the URL
  fetch(url)
    // Data received from fetch request is converted into JSON format
    .then((data) => data.json())
    // Updated data is stored in res.locals
    .then((updatedData) => {
      res.locals.movieResults = updatedData.results;
      return next();
    })
    // Error handler in case fetch fails
    .catch((err) => {
      return next(err);
    });
};

module.exports = movieController;
