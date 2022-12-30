import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {ImInstagram} from 'react-icons/im';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <a href="https://www.linkedin.com/in/everywherejacobkim" target="_blank" rel="noreferrer"><BsLinkedin className="social" /></a>
        <a href="https://github.com/everywherejacobkim" target="_blank" rel="noreferrer"><BsGithub className="social" /></a>
        <a href="https://www.instagram.com/everywhere_jacob" target="_blank" rel="noreferrer"><ImInstagram className="social" /></a>
        <div className='copy-wrapper'>
          <AiOutlineCopyrightCircle />
          <p>2022 Developer Kim All Right Reserved</p>
        </div>
 
    </div>
  )
}

export default Footer