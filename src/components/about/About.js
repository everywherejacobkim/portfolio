import React from 'react'
import aboutImg from '../../img/profile.jpg';
import {FaUserGraduate, FaAward, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import {GoProject} from 'react-icons/go';
import './about.css';
import { Divider } from '@mui/material';

const 
About  = () => {
  return (
    <>
      <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <img src={aboutImg} alt="me" />
        </div>

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

          <FaQuoteLeft className="quoteLeft" /> <br />
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
      <Divider />
    </>
  )}

export default About