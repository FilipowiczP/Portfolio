import React from 'react';
import './scss/tools.scss';

import tools from './skills/tools';

const Tools = ({slide}) =>{
    return(
        <div className={slide === 2 ? "tools" : "tools-hide"}>
            {tools.map(({name, img}, index)=>{
                return(
                    <div key={index} className="tools__skill">
                        <img src={img} alt="img" className="tools__skill__img"/>
                        <p>{name}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Tools;