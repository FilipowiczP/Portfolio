import React from 'react';
import './contact.scss';

import PropTypes from 'prop-types';

const Contact = ({show}) =>{
    return(
        <section  className={show === 4 ? "contact contact-show" : "contact"}>
            <h1 className="contact__title">Kontatk</h1>
            <form className="contact__form">
                <label className="contact__form__name">
                    Imię
                    <input type="text" />
                </label>
                <label className="contact__form__email">
                    Email
                    <input type="email" />
                </label>
                <textarea className="contact__form__message"/>
                <button type="submit">Wyślij</button>
            </form>
        </section>
    );
};

Contact.prototype = {
    show: PropTypes.number.isRequired
};

export default Contact