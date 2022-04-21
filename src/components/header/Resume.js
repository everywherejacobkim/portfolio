import React from 'react';
import texture from '../../img/texture.png';
import {FaFileDownload} from 'react-icons/fa'
import './header.css';

const Resume = () => {
    return (
        <div className="resumeBtns">
            <a href={texture} download className='btn'><FaFileDownload />&nbsp; Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default Resume