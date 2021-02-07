import React from 'react';
import './mainSection.css';

export const MainSection = ({leftContent, rightContent}) => {
  return (
    <div className="mainSection-container">
      <div className="mainSection-container-right">
        {leftContent}
      </div>
      <div className="mainSection-container-left">
        {rightContent}
      </div>
    </div>
  );
}
