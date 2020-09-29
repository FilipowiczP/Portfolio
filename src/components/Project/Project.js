import React from 'react';
import PropTypes from 'prop-types';

import './project.scss';

const Project = ({show}) =>{
    return(
        <section className={show === 3 ? "project project-show" : "project"}>
            <h1 className="project__title">Projekty</h1>
            <div className="project__slider">

            </div>
        </section>
    );
};

Project.prototype = {
    show: PropTypes.number.isRequired
};

export default Project;