import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import './App.css';

// Components
import Main from './components/Main';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
        <GlobalStyle />
          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/skills" element={<Skills />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
