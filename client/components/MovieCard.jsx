import React from 'react';
import Popup from 'reactjs-popup';
import Bartender from './Bartender.jsx';

const MovieCard = (props) => {
  const movie = props.movie;
  const url = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
      <Popup
        trigger={
          <button className="movie-card">
            {' '}
            <img className="movieposter" src={url + movie.poster_path}></img>
          </button>
        }
        position="right center"
      >
        <Bartender genres={movie.genre_ids}></Bartender>
      </Popup>
    </div>
  );
};

export default MovieCard;
