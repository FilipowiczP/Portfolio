import React from 'react';
import './scss/frontend.scss';

import frontend from './skills/frontend';

const Frontend = ({slide}) =>{
    return(
        <div className={slide === 0 ? "frontend" : "frontend-hide"}>
            {frontend.map(({name, img}, index)=>{
                return(
                    <div key={index} className="frontend__skill">
                        <img  src={img} alt="img" className="frontend__skill__img"/>
                        <p>{name}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Frontend;