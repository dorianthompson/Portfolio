import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uyle4z5', 'template_ga9yjc4', form.current, 's1zYDW4urOml_HX1I')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className="contact-form">
        <div className="contact-left">
            <span>Contact Me</span>
        </div>

        <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name' />
                <input type='email' name="user_email" className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message' />
                <input type='submit' value="Send" className='button'/>
                <span>{done && "Thanks for reaching out!"}</span>
            </form>
        </div>
    </div>

  )
}

export default Contact