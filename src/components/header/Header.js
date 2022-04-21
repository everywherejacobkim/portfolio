import React from 'react';
import Resume from './Resume';
import Socials from './Socials';
import Me from '../../img/me.png';
import {BsKeyboardFill, BsFillMouse2Fill} from 'react-icons/bs';
import {FaReact} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import './header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Front-end Web & Mobile Developer</h5>
        <h1>Jacob Namhyung Kim</h1>
        <h5 className="text-light">Javascript&nbsp; || React JS ||&nbsp; React Native</h5>
        <Resume />

        <div className="me"> 
          <img src={Me} alt="portrait"></img>
          <div className="meIcons">
            <BsKeyboardFill className="keyboard" size="5rem"/>
            <BsFillMouse2Fill className="mouse" size="3rem" />
            <FaReact className="reactLogo" size="3rem" />
            <SiJavascript className="jsLogo" size="2rem" />
          </div>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
        <Socials />
      </div>
    </header>
  )
}

export default Header