import React, { useState, useEffect } from 'react';
import Bartender from './Bartender.jsx';
import MovieCard from './MovieCard.jsx';

const Usher = () => {
  // Add movies array to state object
  const [movies, setMovies] = useState([]);

  // Whenever Usher component mounts/updates
  useEffect(() => {
    let isMounted = true;
    //
    fetch('/api')
      .then((data) => data.json())
      .then((updatedData) => {
        if (isMounted) {
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
      {movieCards}
      {/* <Bartender></Bartender> */}
    </div>
  );
};

export default Usher;
