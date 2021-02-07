import React from 'react';
import kbd_key from '../../../resources/kbd_key.svg';
import './arrowKey.css';

export const ArrowKey = ({rotateAngle}) => (
  <div className="arrow-key"><img style={{transform: `rotate(${rotateAngle}deg)`}} src={kbd_key}/></div>
);
