import React from 'react';
import texture from '../../img/texture.png';
import './header.css';

const Resume = () => {
    return (
        <div className="resumeBtns">
            <a href={texture} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
    )
}

export default Resume