import React from 'react';

import frontend from './skills/frontend';

const Frontend = () =>{
    return(
        <div>
            {frontend.map(({name, img})=>{
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

export default Frontend;