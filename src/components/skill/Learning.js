import React from 'react';
import './scss/learning.scss';
import PropTypes from 'prop-types';

import learning from './skills/learning';

const Learning = ({slide}) =>{
    return(
        <div className={slide === 3 ? "learing" : "learing-hide"}>
            {learning.map(({name, img}, index)=>{
                return(
                    <div key={index} className="learing__skill">
                        <img src={img} alt="img" className="learing__skill__img"/>
                        <p>{name}</p>
                    </div>
                )
            })}
        </div>
    );
};

Learning.prototype = {
    slide: PropTypes.number.isRequired
}

export default Learning;