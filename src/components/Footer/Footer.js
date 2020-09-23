import React from 'react';
import './footer.scss';

import github from '../../images/github.png';
import linkin from '../../images/linkin.png';

const Footer = () =>{
    return(
        <footer className="footer">
            <a href="https://github.com/FilipowiczP">
                <img src={github} alt="github" className="footer__link" />
            </a>
            <a href="https://www.linkedin.com/in/przemysław-filipowicz-9b3546175/">
                <img src={linkin} alt="linkin" className="footer__link"/>
            </a>
        </footer>
    );
};

export default Footer;