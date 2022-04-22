import React from 'react'
import aboutImg from '../../img/bgImage.jpg';
import {FaUserGraduate, FaAward, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import {GoProject} from 'react-icons/go';
import './about.css';

const 
About  = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <img src= {aboutImg} alt="me" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon"/>
                <h5>Education</h5>
              <p>2 Years Post Degree Diploma Web & Mobile App Design & Development<br/>
                (Developer stream)
              </p>
              <p>4 Years Bachelor's Degree Education Technology</p>
            </article>

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <p>5+ Years program coordinator & administrative assistant</p>
              <p>2+ Years practical projects & capstone</p>
            </article>

            <article className="about__card projects">
              <GoProject className="about__icon"/>
              <h5>Projects</h5>
              <p>10+ completed projects</p>
            </article>
          </div>

          <FaQuoteLeft className="quoteLeft"/> <br/>
          <p className="about__introduction">
            Jacob is a front-end developer who works to develop visually inspirational and 
            functional apps and websites. Striving to create the best solution for technical, 
            design and time constraints is a big plus. 
          </p>
          <div className="quoteRight">
            <FaQuoteRight />
          </div>
        
        
        </div>
      </div>

    </section>
  )}

export default About