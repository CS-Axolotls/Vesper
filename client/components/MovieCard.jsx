import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Bartender from './Bartender.jsx';

const MovieCard = (props) => {
  const [seen, toggleSeen] = useState(false);

  const popupClick = () => {
    toggleSeen(!seen);
  };

  const movie = props.movie;
  const url = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="movie-card">
      {/* <Popup
        trigger={
          <button className="movie-btn">
            {' '}
            <img className="movieposter" src={url + movie.poster_path}></img>
          </button>
        }
        position="right center"
      >
        <Bartender genres={movie.genre_ids}></Bartender>
      </Popup> */}

      <div className="movie-btn" onClick={popupClick}>
        <img className="movieposter" src={url + movie.poster_path}></img>
      </div>
      {seen ? (
        <Bartender
          genres={movie.genre_ids}
          popupClick={popupClick}
          openDrink={props.openDrink}
        />
      ) : null}
    </div>
  );
};

export default MovieCard;
