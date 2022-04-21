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
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Jacob Namhyung Kim</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <Resume />

        <div className="me"> 
          <img src={Me} alt="portrait"></img>
          <BsKeyboardFill className="keyboard" size="5rem"/>
          <BsFillMouse2Fill className="mouse" size="3rem" />
          <FaReact className="reactLogo" size="3rem" />
          <SiJavascript className="jsLogo" size="2rem" />

        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
        <Socials />
      </div>
    </header>
  )
}

export default Header