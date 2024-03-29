import React, { useState } from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai';
import {FaReact} from 'react-icons/fa';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Nav = () => {

    const [activeNav, setActiveNav] = useState('');

    return (
            <nav className='main-nav'>
                <a href="#header" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? "active" : ""}><AiOutlineHome /></a>
                <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? "active" : ""}><AiOutlineUser /></a>
                <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? "active" : ""}><FaReact /></a>
                <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? "active" : ""}><AiOutlineProject /></a>
                <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ""}><BiMessageSquareDetail /></a>
            </nav>
    )
    }

export default Nav