import React from 'react'

// Components
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import Main from './components/Main';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Testimonial from './components/testimoial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
          <Header />
          <Nav />
          <About />
          <Skills />
          <Projects />
          <Testimonial />
          <Contact />
          <Footer />

    </div>
  );
}

export default App;
