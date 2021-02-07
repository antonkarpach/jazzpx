import React from 'react';
import {ArrowKeys} from "../icons/arrowKeys/arrowKeys";
import './gameControl.css';

export const GameControl = () => (
  <div className="game-control">
    <ArrowKeys/>
    <div className="game-control-text">Используйте стрелки на клавиатуре, чтобы менять направление змейки</div>
  </div>
);
