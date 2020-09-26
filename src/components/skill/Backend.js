import React from 'react';
import './scss/backend.scss';

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

export default Backend;