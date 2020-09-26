import React from 'react';
import './scss/backend.scss';
import PropTypes from 'prop-types';

import backend from './skills/backend';

const Backend = ({slide}) =>{
    return(
        <div className={slide === 1 ? "backend" : "backend-hide"}>
            {backend.map(({name, img}, index)=>{
                return(
                    <div key={index} className="backend__skill">
                        <img  src={img} alt="img" className="backend__skill__img"/>
                        <p>{name}</p>
                    </div>
                )
            })}
        </div>
    );
};

Backend.prototype = {
    slide: PropTypes.number.isRequired
}

export default Backend;