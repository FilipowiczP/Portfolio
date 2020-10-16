import React from 'react';
import './background.scss'

import forest from '../../images/forest.png';
import background from '../../images/background.jpg';

const Background = () =>{
    return(
        <>
            <img src={background} alt="background" className="Background__sky" />
            <img src={forest} alt="forest" className="Background__forest"/>
        </>
    );
};

export default Background;