import React, { useState } from 'react';
import './navigation.scss';
import PropTypes from 'prop-types';

import close from '../../images/close.png'
import closeDesktop from '../../images/closeDesktop.png'
import person from '../../images/person.png';
import skill from '../../images/skill.png';
import projekt from '../../images/projekt.png';
import contact from '../../images/contact.png';

const Navigation = ({check}) =>{

    const [section, setSection] = useState (null);

    const handleAbout = () =>{
        setSection(1)
    }

    const handleSkills = () =>{
        setSection(2)
    }
    
    const handleProject = () =>{
        setSection(3)
    }

    const handleContact = () =>{
        setSection(4)
    }

    const handleClose = () =>{
        setSection(5)
    }

    check(section);
    
    if(window.innerWidth <= 700){
        return(
            <>
            <nav className="navigation">
                <img src={close} alt="person" className="navigation__icon" onClick={handleClose}/>
                <img src={person} alt="person" className="navigation__icon" onClick={handleAbout}/>
                <img src={skill} alt="person" className="navigation__icon" onClick={handleSkills}/>
                <img src={projekt} alt="person" className="navigation__icon" onClick={handleProject}/>
                <img src={contact} alt="person" className="navigation__icon" onClick={handleContact}/>
            </nav>
            </>
        );
    }else{
        return (
            <>
                <nav className="navigation">
                    <img src={closeDesktop} alt="person" className="navigation__icon" onClick={handleClose}/>
                    <p className="navigation__text" onClick={handleAbout}>O mnie</p>
                    <p className="navigation__text" onClick={handleSkills}>Umiejętności</p>
                    <p className="navigation__text" onClick={handleProject}>Projekty</p>
                    <p className="navigation__text" onClick={handleContact}>Kontakt</p>
                </nav>
            </>
        );
    };
}

Navigation.prototype = {
    check: PropTypes.func.isRequired
}

export default Navigation;