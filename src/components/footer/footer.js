import React from 'react';
import './footer.css';
import {Heart} from "./heart";

export const Footer = () => (
  <div className="block">
    <div className="container" style={{fontSize: '14px'}}>
      <div className="box"></div>
      <div className="box"><Heart/></div>
      <div className="box">С любовью, </div>
      <div className="box" style={{color: 'red'}}>Game Portal</div>
    </div>
  </div>
);
