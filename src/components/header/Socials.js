import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {ImInstagram} from 'react-icons/im';
import './header.css';

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/everywherejacobkim" target="_blank"><BsLinkedin className="social" /></a>
        <a href="https://github.com/everywherejacobkim" target="_blank"><BsGithub className="social" /></a>
        <a href="https://instagram.com" target="_blank"><ImInstagram className="social" /></a>
    </div>
  )
}

export default Socials