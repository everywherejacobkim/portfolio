import React from 'react'
import aboutImg from '../../img/profile.jpg';
import {FaUserGraduate, FaAward, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import {GoProject} from 'react-icons/go';
import './about.css';
import { Divider } from '@mui/material';

const 
About  = ({introductionRef, introductionIsVisible}) => {
  return (
    <>
      <section id="about">
        <div className="container about__container">

        {/* <div className="about__me">
          <img src={aboutImg} alt="me" />
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <p className='edu__description_1'>2 Years Post Degree Diploma Web & Mobile App Design & Development<br />
                (Developer stream)
              </p>
              <Divider />
              <p className='edu__description_2'>4 Years Bachelor's Degree Education Technology</p>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <p className='exp__description_1'>2+ Years Practical Projects & Capstone</p>
              <Divider />
              <p className='exp__description_2'>5+ Years Program Coordinator & Technical Administrative Assistant </p>
            </article>

            <article className="about__card projects">
              <GoProject className="about__icon" />
              <h5>Projects</h5>
              <p>10+ Completed Freelance Projects</p>
            </article>
          </div>

          <div className='quote-wrapper' ref={introductionRef}>
            <FaQuoteLeft className="quoteLeft" /> <br />
              <p className={introductionIsVisible ? "about__introduction animateContainer " : "about__introduction"}>
                Jacob is a front-end developer who works to develop visually inspirational and
                functional websites and mobile applications . Always tries to focus on well-designed and
                architected projects based on clean and efficient code .
                
            </p>
          </div>
    
            
          <div className="quoteRight">
            <FaQuoteRight />
          </div>
        </div>
      </div>
      </section>
      <Divider />
    </>
  )}

export default About