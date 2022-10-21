import { Parallax } from 'react-parallax';
import j1 from '../../img/j1.JPG';
import './parallax.css';
import About from '../about/About';

const BgOne = () => (
    <Parallax className='image' bgImage={j1} strength={600} >
        <div className='parallaxContainer'>
            <About />
        </div>
    </Parallax>
);

export default BgOne;