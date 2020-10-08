import React from 'react';
import './contact.scss';

import PropTypes from 'prop-types';

const Contact = ({show}) =>{
    return(
        <section  className={show === 4 ? "contact contact-show" : "contact"}>
            <h1 className="contact__title">Kontatk</h1>
        </section>
    );
};

Contact.prototype = {
    show: PropTypes.number.isRequired
};

export default Contact