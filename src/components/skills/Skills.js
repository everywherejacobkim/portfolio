import React from 'react';
import {MdGppGood} from 'react-icons/md';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container skills__container">
        <div className="skills__left"> 
          <h3 className="skills__left__title">Web Development</h3>
          <div className="skills__left__box">

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
                <h3 className="skills__title">Javascript</h3>
                <h5 className="skills__level">Experienced</h5>
              </div>
            </article>
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
                <h3 className="skills__title">Tailwind CSS</h3>
                <h5 className="skills__level">Experienced</h5>
              </div>
            </article>
            <article className="skills__left__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Node JS</h3>
                <h5 className="skills__level">Intermediate</h5>
              </div>
            </article>
            <article className="skills__left__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">MongoDB</h3>
                <h5 className="skills__level">Experienced</h5>
              </div>  
            </article>
          </div>
        </div>
        
        <div className="skills__right"> 
          <h3 className="skills__right__title">Mobile App Development</h3>
          <div className="skills__right__box">
            <article className="skills__right__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">React Native</h3>
                <h5 className="skills__level">Experienced +</h5>
              </div>
            </article>
            <article className="skills__right__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Java</h3>
                <h5 className="skills__level">Intermediate</h5>
              </div>
            </article>
            <article className="skills__right__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Swift</h3>
                <h5 className="skills__level">Basic</h5>
              </div>
            </article>
            <article className="skills__right__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Objective C</h3>
                <h5 className="skills__level">Basic</h5>
              </div>
            </article>
            <article className="skills__right__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Swift</h3>
                <h5 className="skills__level">Basic</h5>
              </div>
            </article>
            <article className="skills__right__detail">
              <MdGppGood className="skills__icon"/>
              <div>
                <h3 className="skills__title">Ionic</h3>
                <h5 className="skills__level">Basic</h5>
              </div>
            </article>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Skills