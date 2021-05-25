import React, { useState } from 'react';
import Bartender from './Bartender.jsx';

// MovieCard component to display each movie object from usher
const MovieCard = (props) => {
  // 'seen' is a state variable to indicate whether or not bartender popup is open
  const [seen, toggleSeen] = useState(false);

  // Handler for popup clicks
  const popupClick = () => {
    toggleSeen(!seen);
  };

  // Get movie object passed into props
  const movie = props.movie;
  // URL to be appended for poster image
  const url = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="movie-card">
      <div className="movie-btn" onClick={popupClick}>
        <img className="movieposter" src={url + movie.poster_path}></img>
      </div>
      {seen ? (
        <Bartender genres={movie.genre_ids} popupClick={popupClick} />
      ) : null}
    </div>
  );
};

export default MovieCard;
