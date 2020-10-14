import React, { useState, useReducer } from 'react';
import './contact.scss';

import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';

let initialState = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'name':
            return state = {...state, name: action.payload};
        case 'email':
            return state = {...state, email: action.payload};
        case 'subject':
            return state = {...state, subject: action.payload};
        case 'message':
            return state = {...state, message: action.payload};
        default:
            throw new Error();
    }
}

const Contact = ({show}) =>{

    const [send, setSend] = useState (null);
    const [state, dispatch] = useReducer(reducer, initialState);


    const sendMail = (e) =>{
        e.preventDefault();
        if(state.name ===  "" || state.email === "" || state.subject === "" || state.message === ""){
            setSend(false);
        } else{
            emailjs.sendForm('gmail', 'template_yikoxcv', e.target, 'user_N1sIprgV99LBTMUryFsYr')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
            setSend(true);
            e.target.reset();
        }
    }

    return(
        <section  className={show === 4 ? "contact contact-show" : "contact"}>
            <h1 className="contact__title">Kontatk</h1>
            <form className="contact__form" onSubmit={e => sendMail(e)}>
                <label className="contact__form__name">
                    Imię
                    <input type="name"  className="contact__form__name__input" name="from_name" onChange={(event) => dispatch({type:'name', payload: event.target.value})}/>
                </label>
                <label className="contact__form__email">
                    Email
                    <input type="email" className="contact__form__email__input" name="from_email" onChange={(event) => dispatch({type:'email', payload: event.target.value })}/>
                </label>
                <label className="contact__form__subject">
                    Temat
                    <input type="text" className="contact__form__subject__input" name="subject" onChange={(event) => dispatch({type:'subject', payload: event.target.value})}/>
                </label>
                <textarea className="contact__form__message" placeholder="Wiadomość" name="message" onChange={(event) => dispatch({type:'message', payload: event.target.value})}/>
                {send ? <p style={{color:"green"}}>Wysłano wiadomość</p> : <p style={{color:"red"}}>Uzupełnij wszyskie pola</p>}
                <button type="submit" className="contact__form__button">Wyślij</button>
            </form>
        </section>
    );
};

Contact.prototype = {
    show: PropTypes.number.isRequired
};

export default Contact;