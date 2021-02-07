import React from 'react';
import './gameContent.css';
import {GameControl} from "../gameControl/gameControl";

export const GameContent = (props) => (
  <div className="game-content">
    {props.children}
    {!props.gameOver && <div className="game-content-score">Счет: <div
      className="game-content-score-count">{props.score}</div></div>}
    <GameControl/>
  </div>
);
