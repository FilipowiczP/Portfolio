import React from 'react';

import backend from './skills/backend';

const Backend = () =>{
    return(
        <div>
            {backend.map(({name, img})=>{
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

export default Backend;