import React, { useState } from 'react';
import './scss/skill.scss';

import close from '../../images/close.png'
import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';
import Learning from './Learning';

const Skill = () =>{

    const [slide, setSlide] = useState (0)

    const handleFrontend = () =>{
        setSlide(0)
    }

    const handleBackend = () =>{
        setSlide(1)
    }
    
    const handleTools = () =>{
        setSlide(2)
    }

    const handleLearning = () =>{
        setSlide(3)
    }

    return(
        <section className="skill">
            <h1>Umiejętności</h1>

            <div>
                <h1>Technologie</h1>
                <div>
                    <p onClick={handleFrontend}>Frontend</p>
                    <p onClick={handleBackend}>Backend</p>
                    <p onClick={handleTools}>Narzędzia</p>
                    <p onClick={handleLearning}>W trakcie nauki</p>
                </div>
                <img src={close} alt="close" />
            </div>
           <Frontend slide={slide}/>
           <Backend slide={slide}/>
           <Tools slide={slide}/>
           <Learning slide={slide}/>
        </section>
    );
};

export default Skill;