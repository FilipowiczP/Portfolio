import React from 'react';

import tools from './skills/tools';

const Tools = () =>{
    return(
        <div>
            {tools.map(({name, img})=>{
                return(
                    <>
                        <img src={img} alt="img"/>
                        <p>{name}</p>
                    </>
                )
            })}
        </div>
    );
};

export default Tools;