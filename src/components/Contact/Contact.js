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
                    <input type="name"  className="contact__form__name__input"/>
                </label>
                <label className="contact__form__email">
                    Email
                    <input type="email" className="contact__form__email__input"/>
                </label>
                <label className="contact__form__topic">
                    Temat
                    <input type="text" className="contact__form__topic__input"/>
                </label>
                <textarea className="contact__form__message" placeholder="Wiadomość"/>
                <button type="submit" className="contact__form__button">Wyślij</button>
            </form>
        </section>
    );
};

Contact.prototype = {
    show: PropTypes.number.isRequired
};

export default Contact