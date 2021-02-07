import React from 'react';
import {Logo} from "../icons/logo/logo";
import './background.css';
import {Footer} from "../footer/footer";

export const Background = () => {
  return(
    <>
      <div className="background">
        <div className="background-cover">
        </div>
        <div className="background-logo">
          <Logo/>
        </div>
      </div>
      <div className="info">
        <div className="info-h1">На сайте ведутся технические работы</div>
        <div className="info-h3">Мы кое-что починим и скоро вернемся!</div>
      </div>
      <Footer/>
    </>
  );
}
