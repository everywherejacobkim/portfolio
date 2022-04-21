import React from 'react';
import Resume from './Resume';
import Socials from './Socials';
import Me from '../../img/me.jpg';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jacob Namhyung Kim</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Resume />

        <div className="me"> 
          <img src={Me} alt="portrait" style={{width:500}}></img>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
        <Socials />
      </div>
    </header>
  )
}

export default Header