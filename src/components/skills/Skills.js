import React from 'react';
import {MdGppGood} from 'react-icons/md';
import './skills.css';

const Skills = ({ myRef, myElementIsVisible }) => {
  return (
    <section id="skills" ref={myRef}>
      <h4>What Skills I have</h4>
      <h2>My Experience</h2>

      <div className="container skills__container">
        <div className={myElementIsVisible ? "skills__left animateBox_left" : "skills__left"}> 
          <h3 className="skills__left__title">Web Development</h3>
          <div className="skills__left__box">
            <article className="skills__left__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">React JS</h3>
                <h5 className="skills__level">Experienced +</h5>
              </div>  
            </article>
            <article className="skills__left__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">TypeScript</h3>
                <h5 className="skills__level">Experienced</h5>
              </div>
            </article>
            <article className="skills__left__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">HTML/CSS</h3>
                <h5 className="skills__level">Experienced</h5>
              </div>
            </article>

            <article className="skills__left__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Node JS</h3>
                <h5 className="skills__level">Experienced</h5>
              </div>
            </article>
            <article className="skills__left__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">GraphQL</h3>
                <h5 className="skills__level">Intermediate</h5>
              </div>  
            </article>
            <article className="skills__left__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Tailwind</h3>
                <h5 className="skills__level">Experienced</h5>
              </div>
            </article>
          </div>
        </div>
        
        <div className={myElementIsVisible ? "skills__right animateBox_right" : "skills__right"}> 
          <h3 className="skills__right__title">Mobile App Development</h3>
          <div className="skills__right__box">
            <article className="skills__right__detail react_native">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">React Native</h3>
                <h5 className="skills__level">Experienced +</h5>
              </div>
            </article>
            <br />
            <article className="skills__right__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Java Android</h3>
                <h5 className="skills__level">Intermediate</h5>
              </div>
            </article>
            <article className="skills__right__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Swift iOS</h3>
                <h5 className="skills__level">Intermediate</h5>
              </div>
            </article>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Skills