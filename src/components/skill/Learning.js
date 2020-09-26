import React from 'react';
import './scss/learning.scss';

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

export default Learning;