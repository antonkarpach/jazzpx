import React from 'react';
import ScoreSVG from '../../../resources/Score.svg';
import './scoreSparks.css';

export const ScoreSparks = ({score}) => {
  return (
    <div className="score-sparks">
      <div className="score-sparks-count">{score}</div>
      <img src={ScoreSVG}/>
    </div>
  );
}
