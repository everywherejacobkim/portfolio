import React from 'react';
import texture from '../../img/bg/texture.png';
import {FaFileDownload} from 'react-icons/fa';
import { motion } from "framer-motion";
import './header.css';

const Resume = () => {
    return (
        <div className="resumeBtns">
            <motion.a href={texture} download className='btn' animate={{color: ['#fff', '#ceefff']}} transition={{ delay: 2, duration: 3}}>
            <FaFileDownload />&nbsp; Resume</motion.a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default Resume