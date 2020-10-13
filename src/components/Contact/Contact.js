import React from 'react';
import './contact.scss';

import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';

const Contact = ({show}) =>{

    const sendMail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_yikoxcv', e.target, 'user_N1sIprgV99LBTMUryFsYr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return(
        <section  className={show === 4 ? "contact contact-show" : "contact"}>
            <h1 className="contact__title">Kontatk</h1>
            <form className="contact__form" onSubmit={e => sendMail(e)}>
                <label className="contact__form__name">
                    Imię
                    <input type="name"  className="contact__form__name__input" name="from_name"/>
                </label>
                <label className="contact__form__email">
                    Email
                    <input type="email" className="contact__form__email__input" name="from_email"/>
                </label>
                <label className="contact__form__subject">
                    Temat
                    <input type="text" className="contact__form__subject__input" name="subject"/>
                </label>
                <textarea className="contact__form__message" placeholder="Wiadomość" name="message"/>
                <button type="submit" className="contact__form__button">Wyślij</button>
            </form>
        </section>
    );
};

Contact.prototype = {
    show: PropTypes.number.isRequired
};

export default Contact;