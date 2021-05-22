import React from 'react';

const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <div id="movie-card">
      {movie.title}
      {movie.poster_path}
      {movie.genre_ids}
      {movie.vote_average}
    </div>
  );
};

export default MovieCard;
