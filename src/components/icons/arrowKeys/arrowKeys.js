import React from 'react';
import './arrowKeys.css';
import {ArrowKey} from "./arrowKey";

export const ArrowKeys = () => (
    <div className="arrow-keys">
      <div className="arrow-keys-tr">
        <ArrowKey/>
      </div>
      <div className="arrow-keys-tr">
        <ArrowKey rotateAngle="-90"/>
        <ArrowKey rotateAngle="180"/>
        <ArrowKey rotateAngle="90"/>
      </div>
    </div>
);
