import React from 'react';
import { useRouteError } from 'react-router-dom';
import { errorGif } from '../../assets/restaurantImages';
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-element">
      <h1>Sorry can't reach you...</h1>
      <h2> Why? - {error.data}</h2>
      <img src={errorGif} alt="error animation"></img>
    </div>
  );
};
export default Error;
