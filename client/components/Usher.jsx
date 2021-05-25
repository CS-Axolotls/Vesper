import React, { useState, useEffect } from 'react';
import Bartender from './Bartender.jsx';
import MovieCard from './MovieCard.jsx';

const Usher = () => {
  // Add movies array to state object
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [drink, setDrink] = useState({});

  // Invoked whenever Usher component mounts/updates
  useEffect(() => {
    let isMounted = true;
    // Make GET request to server at endpoint /api for list of popular movies
    fetch('/api')
      .then((data) => data.json())
      .then((updatedData) => {
        if (isMounted) {
          // Update the movies array in state to retrieved data
          setMovies(movies.concat(updatedData));
          setPage(page + 1);
        }
      })
      // Listen for any errors
      .catch(() => console.log('fetching from movies in Usher'));

    return () => {
      isMounted = false;
    };
  }, []);

  const getMoreMovies = () => {
    fetch(`/api?page=${page}`)
      .then((data) => data.json())
      .then((updatedData) => {
        console.log(updatedData);
        // Update the movies array in state to retrieved data
        setMovies(movies.concat(updatedData));
        setPage(page + 1);
      })
      // Listen for any errors
      .catch(() => console.log('fetching for more movies in Usher'));
  };

  // Before the movies load, show 'loading'
  if (movies.length === 0) {
    return <p>Loading...</p>;
  }

  // Insert instantiations of MovieCard component into array
  const movieCards = [];
  for (let i = 0; i < movies.length; i++) {
    movieCards.push(<MovieCard movie={movies[i]}></MovieCard>);
  }
  movieCards.push(
    <button className="load-more" onClick={getMoreMovies}>
      Load More
    </button>
  );

  // Render movieCards array containing MovieCard instantiations
  return <div className="usher">{movieCards}</div>;
};

export default Usher;
