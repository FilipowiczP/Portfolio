import React from 'react';
import './navigation.scss';

import person from '../../images/person.png';
import skill from '../../images/skill.png';
import projekt from '../../images/projekt.png';
import contact from '../../images/contact.png';

const Navigation = () =>{
    if(window.innerWidth <= 700){
        return(
            <nav className="navigation">
                <img src={person} alt="person" className="navigation__icon" />
                <img src={skill} alt="person" className="navigation__icon" />
                <img src={projekt} alt="person" className="navigation__icon" />
                <img src={contact} alt="person" className="navigation__icon" />
            </nav>
        );
    }else{
        return (
            <nav className="navigation">
                <p className="navigation__text">O mnie</p>
                <p className="navigation__text">Umiejętności</p>
                <p className="navigation__text">Projekty</p>
                <p className="navigation__text">Kontakt</p>
            </nav>
        );
    };
}

export default Navigation;