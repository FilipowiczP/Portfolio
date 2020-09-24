import React from 'react';

import learning from './skills/learning';

const Learning = () =>{
    return(
        <div>
            {learning.map(({name, img})=>{
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

export default Learning;