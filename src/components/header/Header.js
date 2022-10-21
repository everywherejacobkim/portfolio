import React from 'react';
import Resume from './Resume';
import Socials from './Socials';
import Me from '../../img/me.png';
import {BsKeyboardFill, BsFillMouse2Fill} from 'react-icons/bs';
import {FaReact} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import './header.css';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {

  const typedText = ["Front-end Dev",1000, "React Developer",1500, "React Native Developer",1000];

  return (
    <header id="header">
      <div className="container header__container">
      <TypeAnimation
        sequence={typedText}
        style={{ fontSize: "1.8em" }}
        wrapper="h2"
        repeat={Infinity}
      />
        {/* <h5>Front-end Web & Mobile Developer</h5> */}
        <h1>Jacob Namhyung Kim</h1>
        <h5 className="text-light">JavaScript&nbsp; || React JS ||&nbsp; React Native</h5>
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

        {/* <a href="#contact" className="scroll__down">Scroll Down</a> */}
        <Socials />
      </div>
    </header>
  )
}

export default Header