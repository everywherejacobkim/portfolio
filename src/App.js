import React from 'react';
import { useInView } from 'react-intersection-observer';

// Components
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import BgOne from './components/parallax/BgOne';
import TitleBox from './components/parallax/TitleBox';
import BgTwo from './components/parallax/BgTwo';


function App() {
  const { ref: skillRef, inView: skillIsVisible } = useInView();
  const { ref: projectRef, inView: projectIsVisible } = useInView();
  const { ref: introductionRef, inView: introductionIsVisible } = useInView();
  
  return (
    <div className="App">
          <Header />
          <Nav />
          <TitleBox />
          <BgOne introductionRef={introductionRef} introductionIsVisible={introductionIsVisible}/>
          <Skills skillRef={skillRef} skillIsVisible={skillIsVisible} />
          <BgTwo />
          <Projects projectRef={projectRef} projectIsVisible={projectIsVisible}/>
          <Contact />
          <Footer />
    </div>
  );
}

export default App;
