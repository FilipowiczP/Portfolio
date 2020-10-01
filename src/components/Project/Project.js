import React from 'react';
import PropTypes from 'prop-types';
import './scss/project.scss';

import projects from './projects';
import ProjectCard from './ProjectCard';

const Project = ({show}) =>{
    return(
        <section className={show === 3 ? "project project-show" : "project"}>
            <h1 className="project__title">Projekty</h1>
            <div className="project__slider">
                {projects.map(({img},index)=>{
                    return(
                        <span key={index} className={"project__slider__span"+index}>
                            <img key={index} src={img} alt="project" className="project__slider__img"/>
                        </span>
                    ) 
                })}
            </div>
            <ProjectCard />
        </section>
    );
};

Project.prototype = {
    show: PropTypes.number.isRequired
};

export default Project;