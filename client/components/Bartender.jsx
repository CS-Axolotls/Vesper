import React, { useState, useEffect } from 'react';

const Bartender = (props) => {
  const [drink, setDrink] = useState({});

  useEffect(() => {
    let isMounted = true;

    fetch('/api/specificDrink?genre=' + props.genres[0])
      .then((data) => data.json())
      .then((updatedData) => {
        console.log(updatedData);
        if (isMounted) setDrink(updatedData);
      })
      .catch(() => console.log('fetching drinks in Bartender'));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bartender">
      <img src={drink.strDrinkThumb} alt="rich brian" />
      {props.genres}
    </div>
  );
};
export default Bartender;
