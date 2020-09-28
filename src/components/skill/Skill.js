import React, { useState } from 'react';
import './scss/skill.scss';

import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';
import Learning from './Learning';

const Skill = ({show}) =>{

    const [slide, setSlide] = useState (0);

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
        <section className={show === 2 ? "skill skill-show" : "skill"}>
            <h1 className="skill__title">Umiejętności</h1>

            <div className="skill__content">
                <h1 className="skill__content__title">Technologie</h1>
                <div className="skill__content__box">
                    <p className="skill__content__box__skill" onClick={handleFrontend}>Frontend</p>
                    <p className="skill__content__box__skill" onClick={handleBackend}>Backend</p>
                    <p className="skill__content__box__skill" onClick={handleTools}>Narzędzia</p>
                    <p className="skill__content__box__skill" onClick={handleLearning}>W trakcie nauki</p>
                </div>
            </div>
           <Frontend slide={slide}/>
           <Backend slide={slide}/>
           <Tools slide={slide}/>
           <Learning slide={slide}/>
        </section>
    );
};

export default Skill;