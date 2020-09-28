import React from 'react';
import './main.scss';

import Footer from '../Footer/Footer';

const Main = () =>{
    return(
        <>
            <main className="main">
                <h1 className="main__title">Przemysław Filipowicz</h1>
                <h2 className="main__description">Junior Frontend Developer</h2>
            </main>
            <Footer />
            
        </>
    );
};

export default Main;