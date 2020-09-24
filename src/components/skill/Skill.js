import React from 'react';

import close from '../../images/close.png'



const Skill = () =>{
    return(
        <section>
            <h1>Umiejętności</h1>

            <div>
                <h1>Technologie</h1>
                <div>
                    <p>Frontend</p>
                    <p>Backend</p>
                    <p>Narzędzia</p>
                    <p>W trakcie nauki</p>
                </div>
                <img src={close} alt="close" />
            </div>
           
        </section>
    );
};

export default Skill