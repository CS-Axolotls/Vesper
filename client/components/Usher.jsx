import React, { useState, useEffect } from 'react';
import Bartender from './Bartender.jsx';
import MovieCard from './MovieCard.jsx';

const Usher = () => {
  // Add movies array to state object
  const [movies, setMovies] = useState([]);

  // Invoked whenever Usher component mounts/updates
  useEffect(() => {
    let isMounted = true;
    // Make GET request to server at endpoint /api for list of popular movies
    fetch('/api')
      .then((data) => data.json())
      .then((updatedData) => {
        if (isMounted) {
          // Update the movies array in state to retrieved data
          setMovies(updatedData);
        }
      })
      .catch(() => console.log('fetching from movies in Usher'));

    return () => {
      isMounted = false;
    };
  }, []);

  if (movies.length === 0) {
    return <p>Loading...</p>;
  }

  const movieCards = [];

  for (let i = 0; i < movies.length; i++) {
    movieCards.push(<MovieCard movie={movies[i]}></MovieCard>);
  }
  return (
    <div className="usher">
      <h1 id="title">V E S P E R</h1>
      {movieCards}
    </div>
  );
};

export default Usher;
