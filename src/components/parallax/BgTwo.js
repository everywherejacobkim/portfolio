import { Parallax } from 'react-parallax';
import j2 from '../../img/j2.JPG';
import './parallax.css';
import { Paper } from '@mui/material';

const BgTwo = () => (
    <Parallax className='imageTwo' bgImage={j2} strength={900} >
        <div className='parallaxContainer'>
            <Paper elevation={10} className='quote'>
                <h1>You can’t go back</h1>
                <h1>and change the beginning</h1>
                <h1 className=''>
                    <p className='but'>But ,</p>
                    you can start where you are</h1>
                <h1>and change the ending</h1>
                <h2>– C.S. Lewis</h2>
            </Paper>
        </div>
    </Parallax>
);

export default BgTwo;