import React from 'react';
import { useInView } from 'react-intersection-observer';

// Components
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Testimonial from './components/testimoial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import BgOne from './components/parallax/BgOne';
import TitleBox from './components/parallax/TitleBox';


function App() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  
  // const myRef = useRef();
  // const [visibleElement, setVisibleElement] = useState();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setVisibleElement(entry.isIntersecting);
  //   })
  //   observer.observe(myRef.current)
  // }, [])

  // console.log(visibleElement);

  return (
    <div className="App">
          <Header />
          <Nav />
          <TitleBox />
          <BgOne />
          <Skills myRef={myRef} myElementIsVisible={myElementIsVisible}/>
          <Projects />
          <Testimonial />
          <Contact />
          <Footer />
    </div>
  );
}

export default App;
