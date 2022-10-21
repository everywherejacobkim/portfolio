import { Parallax } from 'react-parallax';
import j2 from '../../img/j2.JPG';
import './parallax.css';

const BgTwo = () => (
    <Parallax className='image' bgImage={j2} strength={900} >
        <div className='parallaxContainer'>
            <div className='quote'>
                <h1>You can’t go back and change the beginning,</h1>
                <h1>But you can start where you are</h1>
                <h1>and change the ending.</h1>
                <h2>– C.S. Lewis</h2>
            </div>
        </div>
    </Parallax>
);

export default BgTwo;