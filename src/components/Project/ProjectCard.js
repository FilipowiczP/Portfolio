import React from 'react';
import { Link } from 'react-router-dom';
import './scss/cards.scss'

import inSite from '../../images/site.png'
import projects from './projects';

const ProjectCard = () =>{
    return(
        <div  className="projectCard">
        {projects.map(({name, description, technology, img}, index)=>{
            return(
                    <div key={index} className="projectCard__box">
                        <div className="projectCard__box__image">
                            <img src={img} alt="" className="projectCard__box__image__photo"/>
                        </div>
                        <div className="projectCard__box__content">
                            <h1 className="projectCard__box__content__title">{name}</h1>
                            <h2 className="projectCard__box__content__text">{technology}</h2>
                            <p className="projectCard__box__content__description">{description}</p>
                            <Link to="/"><img src={inSite} alt="" /></Link>
                        </div>
                    </div>
            )
        })}
    </div>
    );
};

export default ProjectCard;