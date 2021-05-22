import React, { useState } from 'react';
import Bartender from './Bartender.jsx';

const Usher = () => {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <div>Usher comp</div>
      <Bartender></Bartender>
    </div>
  );
};

export default Usher;
