import React from 'react';
import './scss/cards.scss'

import projects from './projects';
import repo from '../../images/repo.png';

const ProjectCard = () =>{
    return(
        <div  className="projectCard">
        {projects.map(({name, description, technology, img, link}, index)=>{
            return(
                    <div key={index} className="projectCard__box">
                        <div className="projectCard__box__image">
                            <img src={img} alt="" className="projectCard__box__image__photo"/>
                        </div>
                        <div className="projectCard__box__content">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="projectCard__box__content__link">
                                <img src={repo} alt="repo" />
                            </a>
                            <h1 className="projectCard__box__content__title">{name}</h1>
                            <h2 className="projectCard__box__content__text">{technology}</h2>
                            <p className="projectCard__box__content__description">{description}</p>
                        </div>
                    </div>
            )
        })}
    </div>
    );
};

export default ProjectCard;