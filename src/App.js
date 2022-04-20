import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {lightTheme} from './components/Themes'
import {darkTheme} from './components/Themes'
import GlobalStyle from './globalStyles';
import './App.css';

// Components
import Main from './components/Main';
import About from './components/About';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/skills" element={<Skills />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/blogs" element={<Blogs />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>

    




    </div>
  );
}

export default App;
