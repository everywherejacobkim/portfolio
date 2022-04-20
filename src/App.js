import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import './App.css';

// Components
import Main from './components/pages/Main';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';


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
