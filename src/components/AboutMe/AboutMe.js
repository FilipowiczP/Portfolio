import React from 'react';
import './aboutMe.scss';

const AboutMe = ({show}) =>{
    return(
        <section className={show === 1 ? "aboutMe aboutMe-show" : "aboutMe"}>
            <h1 className="aboutMe__title">O mnie</h1>
            <div className="aboutMe__me">
                <h2 className="aboutMe__me__title">Kim jestem?</h2>
                <p className="aboutMe__me__content">Od roku uczę się tworzyć strony internetowe. Głównie pracuję z JavaScript (React). Interesuje mnie zarówno Frontend jak i Backend</p>
            </div>
            <div className="aboutMe__why">
                <h2 className="aboutMe__why__title">Dlaczego programowanie</h2>
                <p className="aboutMe__why__content">Zmieniłem branżę z logistyki ponieważ czułem brak możliwości rozwoju zawodowego. Jednak logistyka nauczyła mnie optymalizacji i 
                    planowaniu zadań w dążeniu do wyznaczonego celu oraz sposobu podejścia do problemu. Takiewłaśnie myślenie oraz doświadczenie 
                    bardzo przydają mi się w pisaniu czystego kodu. Informatyka jest na tyle szeroką i dynamicznie rozwijającą się branżą, 
                    że umożliwia mi ciągły samorozwój oraz poznawanie nowych technologii.</p>
            </div>
            <div className="aboutMe__project">
                <h2 className="aboutMe__project__title">Czym się zajmuję</h2>
                <p className="aboutMe__project__content"> Aktualnie ukończyłem pierwszą część kursu Coders Lab w której skład wchodziły moduły Frontendu, a od listopada aktualnego 
                    roku zaczynam zdalnie część odpowiedzialną za Backend (Node.js Express.js ,MongoDB). Do tego czasu planuję poświęcić swój czas na naukę TypeScript.</p>
            </div>
        </section>
    );
};

export default AboutMe;