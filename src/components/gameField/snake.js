import React from "react";
import './snake.css';

const Snake = ({snakeDots}) => {
  return (
    <div>
      {snakeDots.map((dot, item) => {
        const dotStyle = {
          left: `${dot[0]}px`,
          top: `${dot[1]}px`
        }

        return (<div className="snake-dot" key={item} style={dotStyle}></div>)
      })}
    </div>
  );
}

export default Snake;
