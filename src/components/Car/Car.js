import React from 'react';

const Car = ({car: {id, model, year, price}}) => {
  return (
      <div>
        <div>{id}</div>
        <div>{model}</div>
        <div>{year}</div>
        <div>{price}</div>
      </div>
  );
};

export default Car;
