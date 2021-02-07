import React from "react";
import './food.css';

const Food = ({food}) => {
  const foodStyle = {
    left: `${food[0]}px`,
    top: `${food[1]}px`,
  };

  return (
    <div className='snake-food' style={foodStyle}></div>
  );
}

export default Food;
