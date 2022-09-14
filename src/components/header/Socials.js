import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {ImInstagram} from 'react-icons/im';
import './header.css';
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <motion.div className="header__socials" initial={{y:'-50vh'}} animate={{y:80}} transition={{type:'spring', stiffness: 60, delay:0.7}}>
        <a href="https://www.linkedin.com/in/everywherejacobkim" target="_blank" rel="noreferrer"><BsLinkedin className="social" /></a>
        <a href="https://github.com/everywherejacobkim" target="_blank" rel="noreferrer"><BsGithub className="social" /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><ImInstagram className="social" /></a>
    </motion.div>
  )
}

export default Socials