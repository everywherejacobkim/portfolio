import { ThemeProvider } from 'styled-components';
import {lightTheme} from './components/Themes'
import {darkTheme} from './components/Themes'
import GlobalStyle from './globalStyles';
import './App.css';
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
     <ThemeProvider theme={darkTheme}>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
     </ThemeProvider>
    




    </div>
  );
}

export default App;
